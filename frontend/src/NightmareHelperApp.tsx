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
import {Evidence} from './data/EvidenceList';
import GhostListTools from './data/GhostListTools';
import GhostList from './data/GhostList';
import {Ghost} from './data/Ghost';
import {Modifier} from './data/Modifier';
import {StepsClicker} from './cmp/StepsClicker';
import prebuildValues from '../prebuild-values.json';

const {Header, Footer} = Layout;

type IProps = object;

@observer
export class NightmareHelperApp extends React.Component<IProps> {
    settings: Settings = {
        evidenceCount: 2,
        ghostSpeedModifier: 1
    };

    selectedEvidences: Evidence[] = [];
    excludedEvidences: Evidence[] = [];
    modifiers: Modifier[] = [
        // Modifiers['EVENT_CLOUD']
    ];
    ghostSpeed?: number = undefined;

    constructor(props: IProps) {
        super(props);

        makeObservable(this, {
            settings: observable,
            selectedEvidences: observable,
            excludedEvidences: observable,
            modifiers: observable,
            ghostSpeed: observable,
            possibleEvidences: computed,
            possibleGhosts: computed,
            handleSettingsChange: action,
            handleGhostClick: action,
            handleSelectedEvidenceListChanged: action,
            handleExcludedEvidenceListChanged: action,
            applyGhostSpeed: action
        });
    }

    get possibleEvidences(): Evidence[] {
        return GhostListTools.calculatePossibleEvidences(
            this.selectedEvidences.slice(),
            this.settings.evidenceCount,
            this.ghostSpeed
        );
    }

    get possibleGhosts(): Ghost[] {
        if (this.selectedEvidences.length === 0 && this.ghostSpeed === undefined) {
            return GhostList;
        }

        return GhostListTools.calculatePossibleGhosts(
            this.selectedEvidences.slice(),
            this.settings.evidenceCount,
            this.ghostSpeed
        );
    }

    handleSettingsChange = (settings: Settings) => {
        if (settings.evidenceCount !== this.settings.evidenceCount) {
            this.selectedEvidences = [];
            this.excludedEvidences = [];
        }

        this.settings = settings;
    };

    handleSelectedEvidenceListChanged = (selectedEvidences: Evidence[]) => {
        this.selectedEvidences = selectedEvidences;
    };

    handleExcludedEvidenceListChanged = (excludedEvidences: Evidence[]) => {
        this.excludedEvidences = excludedEvidences;
    };

    handleGhostClick = (ghost: Ghost) => {
        this.settings.evidenceCount = 3;
        this.selectedEvidences = [...ghost.evidences];
    };

    applyGhostSpeed = (speed: number) => {
        this.ghostSpeed = speed;
    };

    render(): React.ReactNode {
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
                                        <Col span={12}>
                                            <SettingsMenu
                                                settings={this.settings}
                                                onSettingsChange={this.handleSettingsChange}
                                            />
                                        </Col>
                                    </Row>
                                </Header>
                                <Layout style={{background: 'none'}}>
                                    <Row style={{justifyContent: 'center', margin: 16}}>
                                        <Col
                                            span={10}
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'flex-start'
                                            }}
                                        >
                                            <SelectGhostMenu
                                                possibleGhosts={this.possibleGhosts.slice()}
                                                modifiers={this.modifiers.slice()}
                                                onGhostClick={this.handleGhostClick}
                                            />
                                        </Col>
                                        <Col
                                            span={10}
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'flex-start',
                                                flexDirection: 'column'
                                            }}
                                        >
                                            <SelectEvidenceMenu
                                                selectedEvidences={this.selectedEvidences.slice()}
                                                excludedEvidences={this.excludedEvidences.slice()}
                                                possibleEvidences={this.possibleEvidences.slice()}
                                                onSelectedEvidenceListChanged={this.handleSelectedEvidenceListChanged}
                                                onExcludedEvidenceListChanged={this.handleExcludedEvidenceListChanged}
                                            />
                                            <StepsClicker
                                                applyGhostSpeed={this.applyGhostSpeed}
                                                ghostSpeedModifier={this.settings.ghostSpeedModifier}
                                            />
                                        </Col>
                                    </Row>
                                </Layout>
                                <Footer style={{textAlign: 'center'}}>
                                    {`Phasmophobia Nightmare Helper v${prebuildValues.version} `}
                                    <a href={prebuildValues.commitLink}>{prebuildValues.commitHash}</a>
                                    {` ©2023 by Levsha1337`}
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
