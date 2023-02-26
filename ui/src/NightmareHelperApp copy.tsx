import * as React from 'react';
import 'antd/dist/reset.css';
import './NightmareHelperApp.scss';
import {SettingsMenu} from './cmp/SettingsMenu';
import {SelectGhostMenu} from './cmp/SelectGhostMenu';
import {SelectEvidenceMenu} from './cmp/SelectEvidenceMenu';
import {action, computed, makeObservable, observable} from 'mobx';
import {Settings} from './models/Settings';
import {observer} from 'mobx-react';
import {App, Col, ConfigProvider, Layout, Row, Space, theme} from 'antd';
import EvidenceList, {compareEvidence, compareEvidenceCode, Evidence, getByCode} from './data/EvidenceList';
import GhostListTools from './data/GhostListTools';
import classNames from 'classnames';

const {Header, Footer} = Layout;

type IProps = object;

@observer
export class NightmareHelperApp extends React.Component<IProps> {
    settings: Settings = {
        evidenceCount: 2
    };

    selectedEvidences: Evidence[] = [];

    constructor(props: IProps) {
        super(props);

        makeObservable(this, {
            settings: observable,
            selectedEvidences: observable,
            handleSettingsChange: action,
            onEvidenceClick: action
        });
    }

    getPossibleEvidences(): Evidence[] {
        return EvidenceList;
        // if (this.selectedEvidences.length === 0) {
        //     return EvidenceList;
        // }

        // try {
        //     const keys = new Set();
        //     const repeating = GhostListTools.calculatePossibleGhosts(
        //         this.selectedEvidences,
        //         this.settings.evidenceCount
        //     )
        //         .map((ghost) => ghost.evidences)
        //         .flat();

        //     return repeating.filter((ev) => !keys.has(ev.code) && keys.add(ev.code));
        // } catch (e) {
        //     console.error(e);
        //     return EvidenceList;
        // }

        // const keys = new Set();
        // const repeating = GhostListTools.calculatePossibleGhosts(this.selectedEvidences, this.settings.evidenceCount)
        //     .map((ghost) => ghost.evidences)
        //     .flat();

        // return repeating.filter((ev) => !keys.has(ev.code) && keys.add(ev.code));
    }

    handleSettingsChange = (settings: Partial<Settings>) => {
        if (settings.evidenceCount !== this.settings.evidenceCount) {
            this.selectedEvidences = [];
        }

        Object.keys(settings).forEach((key: keyof Settings) => {
            this.settings[key] = settings[key];
        });
    };

    onEvidenceClick = (evidenceCode: string) => {
        const evidence = getByCode(evidenceCode);

        if (this.selectedEvidences.find(compareEvidenceCode(evidenceCode))) {
            this.selectedEvidences = this.selectedEvidences.filter((ev) => ev.code !== evidence.code);
        } else {
            this.selectedEvidences.push(evidence);
        }
        this.forceUpdate();
    };

    render(): React.ReactNode {
        console.log('main render');

        return (
            <>
                <App>
                    <ConfigProvider
                        theme={{
                            algorithm: theme.darkAlgorithm
                        }}
                    >
                        <Space direction="vertical" style={{width: '100%'}} size={[0, 48]}>
                            <Layout style={{background: 'none'}}>
                                <Header>
                                    <Row justify={'space-between'}>
                                        <Col span={8} style={{fontSize: '120%', fontWeight: 'bold'}}>
                                            Nightmare Helper
                                        </Col>
                                        <Col span={8}>
                                            <SettingsMenu
                                                settings={this.settings}
                                                onSettingsChange={this.handleSettingsChange}
                                            />
                                        </Col>
                                    </Row>
                                </Header>
                                <Layout style={{background: 'none'}}>
                                    <Row style={{justifyContent: 'space-evenly', margin: 16}}>
                                        <Col span={10}>
                                            <SelectGhostMenu />
                                        </Col>
                                        <Col span={10}>
                                            <div className="select-evidence-menu">
                                                {EvidenceList.map((evidence) => {
                                                    const evidenceClassNames = ['evidence-inner'];
                                                    let possible = true;

                                                    if (
                                                        this.selectedEvidences.slice().find(compareEvidence(evidence))
                                                    ) {
                                                        evidenceClassNames.push('evidence-selected');
                                                    }
                                                    if (!this.getPossibleEvidences().find(compareEvidence(evidence))) {
                                                        evidenceClassNames.push('evidence-impossible');
                                                        possible = false;
                                                    }

                                                    return (
                                                        <div className="evidence" key={evidence.code}>
                                                            <div
                                                                className={classNames(evidenceClassNames)}
                                                                onClick={
                                                                    possible
                                                                        ? () => this.onEvidenceClick(evidence.code)
                                                                        : null
                                                                }
                                                            >
                                                                <img
                                                                    src={evidence.imageLink}
                                                                    alt={evidence.name}
                                                                    style={{width: '24px', height: '24px'}}
                                                                />
                                                                <div className="evidence-text">{evidence.name}</div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </Col>
                                    </Row>
                                </Layout>
                                <Footer style={{textAlign: 'center'}}>
                                    Phasmophobia Nightmare Helper ©2023 by Levsha1337
                                </Footer>
                            </Layout>
                        </Space>
                    </ConfigProvider>
                </App>
                <div className="background" />
            </>
        );
    }
}
