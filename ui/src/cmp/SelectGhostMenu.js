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
exports.SelectGhostMenu = void 0;
const classnames_1 = __importDefault(require("classnames"));
const React = __importStar(require("react"));
const GhostList_1 = __importDefault(require("../data/GhostList"));
const GhostListTools_1 = __importDefault(require("../data/GhostListTools"));
const Modifier_1 = require("../data/Modifier");
class SelectGhostMenu extends React.Component {
    render() {
        const possibleGhostCodes = this.props.possibleGhosts.map(gh => gh.codeName);
        return (<div className="select-ghost-menu">
                {GhostList_1.default.map((ghost) => {
                const ghostClassNames = ['ghost'];
                let modifiersAffect = (0, Modifier_1.calcAffect)(GhostListTools_1.default.calculateModifiersAffect(ghost, this.props.modifiers));
                if (!possibleGhostCodes.includes(ghost.codeName) || modifiersAffect.influence === Modifier_1.ModifierInfluence.EXCLUDES) {
                    ghostClassNames.push('impossible-ghost');
                }
                return (<div key={ghost.codeName} className={(0, classnames_1.default)(ghostClassNames)}>
                            <div className="ghost-modifier" style={{ color: modifiersAffect.markColor }}>{modifiersAffect.mark}</div>
                            <div className="ghost-name" onClick={() => this.props.onGhostClick(ghost)}>{ghost.name}</div>
                        </div>);
            })}
            </div>);
    }
}
exports.SelectGhostMenu = SelectGhostMenu;
