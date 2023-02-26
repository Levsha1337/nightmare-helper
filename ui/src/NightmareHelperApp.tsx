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
import EvidenceList, {Evidence} from './data/EvidenceList';
import GhostListTools from './data/GhostListTools';
import GhostList from './data/GhostList';
import { Ghost } from './data/Ghost';
import { Modifier, Modifiers } from './data/Modifier';

const {Header, Footer} = Layout;

type IProps = object;

@observer
export class NightmareHelperApp extends React.Component<IProps> {
    settings: Settings = {
        evidenceCount: 2
    };

    selectedEvidences: Evidence[] = [];
    modifiers: Modifier[] = [
        // Modifiers['EVENT_CLOUD']
    ];

    constructor(props: IProps) {
        super(props);

        makeObservable(this, {
            settings: observable,
            selectedEvidences: observable,
            modifiers: observable,
            // possibleEvidences: computed,
            handleSettingsChange: action,
            handleSelectedEvidenceListChanged: action,
            handleGhostClick: action
        });
    }

    get possibleEvidences(): Evidence[] {
        // if (this.selectedEvidences.length === 0) {
        //     return EvidenceList;
        // }

        // const keys = new Set();
        // const repeating = this.possibleGhosts.map((ghost) => ghost.evidences).flat();

        // return repeating.filter((ev) => !keys.has(ev.code) && keys.add(ev.code));

        return GhostListTools.calculatePossibleEvidences(this.selectedEvidences, this.settings.evidenceCount);
    }

    get possibleGhosts(): Ghost[] {
        if (this.selectedEvidences.length === 0) {
            return GhostList;
        }

        return GhostListTools.calculatePossibleGhosts(this.selectedEvidences, this.settings.evidenceCount);
    }

    handleSettingsChange = (settings: Settings) => {
        if (settings.evidenceCount !== this.settings.evidenceCount) {
            this.selectedEvidences = [];
        }

        this.settings = settings;
    };

    handleSelectedEvidenceListChanged = (selectedEvidences: Evidence[]) => {
        this.selectedEvidences = selectedEvidences;
    };

    handleGhostClick = (ghost: Ghost) => {
        this.settings.evidenceCount = 3;
        this.selectedEvidences = [...ghost.evidences];
    }

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
                                    <Row style={{justifyContent: 'center', margin: 16}}>
                                        <Col span={10} style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
                                            <SelectGhostMenu
                                                possibleGhosts={this.possibleGhosts.slice()}
                                                modifiers={this.modifiers.slice()}
                                                onGhostClick={this.handleGhostClick}
                                            />
                                        </Col>
                                        <Col span={10} style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
                                            <SelectEvidenceMenu
                                                selectedEvidences={this.selectedEvidences.slice()}
                                                possibleEvidences={this.possibleEvidences.slice()}
                                                onSelectedEvidenceListChanged={this.handleSelectedEvidenceListChanged}
                                            />
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
