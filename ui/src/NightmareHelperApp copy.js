"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NightmareHelperApp = void 0;
const React = __importStar(require("react"));
require("antd/dist/reset.css");
require("./NightmareHelperApp.scss");
const SettingsMenu_1 = require("./cmp/SettingsMenu");
const SelectGhostMenu_1 = require("./cmp/SelectGhostMenu");
const mobx_1 = require("mobx");
const mobx_react_1 = require("mobx-react");
const antd_1 = require("antd");
const EvidenceList_1 = __importStar(require("./data/EvidenceList"));
const classnames_1 = __importDefault(require("classnames"));
const { Header, Footer } = antd_1.Layout;
let NightmareHelperApp = class NightmareHelperApp extends React.Component {
    constructor(props) {
        super(props);
        this.settings = {
            evidenceCount: 2
        };
        this.selectedEvidences = [];
        this.handleSettingsChange = (settings) => {
            if (settings.evidenceCount !== this.settings.evidenceCount) {
                this.selectedEvidences = [];
            }
            Object.keys(settings).forEach((key) => {
                this.settings[key] = settings[key];
            });
        };
        this.onEvidenceClick = (evidenceCode) => {
            const evidence = (0, EvidenceList_1.getByCode)(evidenceCode);
            if (this.selectedEvidences.find((0, EvidenceList_1.compareEvidenceCode)(evidenceCode))) {
                this.selectedEvidences = this.selectedEvidences.filter((ev) => ev.code !== evidence.code);
            }
            else {
                this.selectedEvidences.push(evidence);
            }
            this.forceUpdate();
        };
        (0, mobx_1.makeObservable)(this, {
            settings: mobx_1.observable,
            selectedEvidences: mobx_1.observable,
            handleSettingsChange: mobx_1.action,
            onEvidenceClick: mobx_1.action
        });
    }
    getPossibleEvidences() {
        return EvidenceList_1.default;
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
    render() {
        console.log('main render');
        return (<>
                <antd_1.App>
                    <antd_1.ConfigProvider theme={{
                algorithm: antd_1.theme.darkAlgorithm
            }}>
                        <antd_1.Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
                            <antd_1.Layout style={{ background: 'none' }}>
                                <Header>
                                    <antd_1.Row justify={'space-between'}>
                                        <antd_1.Col span={8} style={{ fontSize: '120%', fontWeight: 'bold' }}>
                                            Nightmare Helper
                                        </antd_1.Col>
                                        <antd_1.Col span={8}>
                                            <SettingsMenu_1.SettingsMenu settings={this.settings} onSettingsChange={this.handleSettingsChange}/>
                                        </antd_1.Col>
                                    </antd_1.Row>
                                </Header>
                                <antd_1.Layout style={{ background: 'none' }}>
                                    <antd_1.Row style={{ justifyContent: 'space-evenly', margin: 16 }}>
                                        <antd_1.Col span={10}>
                                            <SelectGhostMenu_1.SelectGhostMenu />
                                        </antd_1.Col>
                                        <antd_1.Col span={10}>
                                            <div className="select-evidence-menu">
                                                {EvidenceList_1.default.map((evidence) => {
                const evidenceClassNames = ['evidence-inner'];
                let possible = true;
                if (this.selectedEvidences.slice().find((0, EvidenceList_1.compareEvidence)(evidence))) {
                    evidenceClassNames.push('evidence-selected');
                }
                if (!this.getPossibleEvidences().find((0, EvidenceList_1.compareEvidence)(evidence))) {
                    evidenceClassNames.push('evidence-impossible');
                    possible = false;
                }
                return (<div className="evidence" key={evidence.code}>
                                                            <div className={(0, classnames_1.default)(evidenceClassNames)} onClick={possible
                        ? () => this.onEvidenceClick(evidence.code)
                        : null}>
                                                                <img src={evidence.imageLink} alt={evidence.name} style={{ width: '24px', height: '24px' }}/>
                                                                <div className="evidence-text">{evidence.name}</div>
                                                            </div>
                                                        </div>);
            })}
                                            </div>
                                        </antd_1.Col>
                                    </antd_1.Row>
                                </antd_1.Layout>
                                <Footer style={{ textAlign: 'center' }}>
                                    Phasmophobia Nightmare Helper ©2023 by Levsha1337
                                </Footer>
                            </antd_1.Layout>
                        </antd_1.Space>
                    </antd_1.ConfigProvider>
                </antd_1.App>
                <div className="background"/>
            </>);
    }
};
NightmareHelperApp = __decorate([
    mobx_react_1.observer
], NightmareHelperApp);
exports.NightmareHelperApp = NightmareHelperApp;
