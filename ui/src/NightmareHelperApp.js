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
const SelectEvidenceMenu_1 = require("./cmp/SelectEvidenceMenu");
const mobx_1 = require("mobx");
const mobx_react_1 = require("mobx-react");
const antd_1 = require("antd");
const GhostListTools_1 = __importDefault(require("./data/GhostListTools"));
const GhostList_1 = __importDefault(require("./data/GhostList"));
const { Header, Footer } = antd_1.Layout;
let NightmareHelperApp = class NightmareHelperApp extends React.Component {
    constructor(props) {
        super(props);
        this.settings = {
            evidenceCount: 2
        };
        this.selectedEvidences = [];
        this.modifiers = [
        // Modifiers['EVENT_CLOUD']
        ];
        this.handleSettingsChange = (settings) => {
            if (settings.evidenceCount !== this.settings.evidenceCount) {
                this.selectedEvidences = [];
            }
            this.settings = settings;
        };
        this.handleSelectedEvidenceListChanged = (selectedEvidences) => {
            this.selectedEvidences = selectedEvidences;
        };
        this.handleGhostClick = (ghost) => {
            this.settings.evidenceCount = 3;
            this.selectedEvidences = [...ghost.evidences];
        };
        (0, mobx_1.makeObservable)(this, {
            settings: mobx_1.observable,
            selectedEvidences: mobx_1.observable,
            modifiers: mobx_1.observable,
            // possibleEvidences: computed,
            handleSettingsChange: mobx_1.action,
            handleSelectedEvidenceListChanged: mobx_1.action,
            handleGhostClick: mobx_1.action
        });
    }
    get possibleEvidences() {
        // if (this.selectedEvidences.length === 0) {
        //     return EvidenceList;
        // }
        // const keys = new Set();
        // const repeating = this.possibleGhosts.map((ghost) => ghost.evidences).flat();
        // return repeating.filter((ev) => !keys.has(ev.code) && keys.add(ev.code));
        return GhostListTools_1.default.calculatePossibleEvidences(this.selectedEvidences, this.settings.evidenceCount);
    }
    get possibleGhosts() {
        if (this.selectedEvidences.length === 0) {
            return GhostList_1.default;
        }
        return GhostListTools_1.default.calculatePossibleGhosts(this.selectedEvidences, this.settings.evidenceCount);
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
                                    <antd_1.Row style={{ justifyContent: 'center', margin: 16 }}>
                                        <antd_1.Col span={10} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <SelectGhostMenu_1.SelectGhostMenu possibleGhosts={this.possibleGhosts.slice()} modifiers={this.modifiers.slice()} onGhostClick={this.handleGhostClick}/>
                                        </antd_1.Col>
                                        <antd_1.Col span={10} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <SelectEvidenceMenu_1.SelectEvidenceMenu selectedEvidences={this.selectedEvidences.slice()} possibleEvidences={this.possibleEvidences.slice()} onSelectedEvidenceListChanged={this.handleSelectedEvidenceListChanged}/>
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
