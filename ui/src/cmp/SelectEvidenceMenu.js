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
exports.SelectEvidenceMenu = void 0;
const React = __importStar(require("react"));
const EvidenceList_1 = __importStar(require("../data/EvidenceList"));
const classnames_1 = __importDefault(require("classnames"));
class SelectEvidenceMenu extends React.Component {
    constructor(props) {
        super(props);
        this.onEvidenceClick = (evidence) => {
            if (this.props.selectedEvidences.find((0, EvidenceList_1.compareEvidence)(evidence))) {
                this.props.onSelectedEvidenceListChanged(this.props.selectedEvidences.filter((ev) => ev.code !== evidence.code));
            }
            else {
                this.props.onSelectedEvidenceListChanged([...this.props.selectedEvidences, evidence]);
            }
        };
    }
    render() {
        console.log(this.props.selectedEvidences.map((ev) => ev.name));
        console.log(this.props.possibleEvidences.map((ev) => ev.name));
        return (<div className="select-evidence-menu">
                {EvidenceList_1.default.map((evidence) => {
                const evidenceClassNames = ['evidence-inner'];
                let possible = true;
                if (this.props.selectedEvidences.find((0, EvidenceList_1.compareEvidence)(evidence))) {
                    evidenceClassNames.push('evidence-selected');
                }
                if (!this.props.possibleEvidences.find((0, EvidenceList_1.compareEvidence)(evidence))) {
                    evidenceClassNames.push('evidence-impossible');
                    possible = false;
                }
                return (<div className="evidence" key={evidence.code}>
                            <div className={(0, classnames_1.default)(evidenceClassNames)} onClick={() => (possible ? this.onEvidenceClick(evidence) : null)}>
                                <img src={evidence.imageLink} alt={evidence.name} style={{ width: '24px', height: '24px' }}/>
                                <div className="evidence-text">{evidence.name}</div>
                            </div>
                        </div>);
            })}
            </div>);
    }
}
exports.SelectEvidenceMenu = SelectEvidenceMenu;
