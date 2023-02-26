import * as React from 'react';
import EvidenceList, {compareEvidence, Evidence} from '../data/EvidenceList';
import {observer} from 'mobx-react';
import {action, makeObservable, observable} from 'mobx';
import classNames from 'classnames';

export type EvidenceForList = Evidence & {
    selected: boolean;
    active: boolean;
};

type IProps = {
    selectedEvidences: Evidence[];
    possibleEvidences: Evidence[];
    onSelectedEvidenceListChanged: (evidences: Evidence[]) => void;
};

export class SelectEvidenceMenu extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    onEvidenceClick = (evidence: Evidence) => {
        if (this.props.selectedEvidences.find(compareEvidence(evidence))) {
            this.props.onSelectedEvidenceListChanged(this.props.selectedEvidences.filter((ev) => ev.code !== evidence.code));
        } else {
            this.props.onSelectedEvidenceListChanged([...this.props.selectedEvidences, evidence]);
        }
    }

    render(): React.ReactNode {
        console.log(this.props.selectedEvidences.map((ev) => ev.name));
        console.log(this.props.possibleEvidences.map((ev) => ev.name));

        return (
            <div className="select-evidence-menu">
                {EvidenceList.map((evidence) => {
                    const evidenceClassNames = ['evidence-inner'];
                    let possible = true;

                    if (this.props.selectedEvidences.find(compareEvidence(evidence))) {
                        evidenceClassNames.push('evidence-selected');
                    }
                    if (!this.props.possibleEvidences.find(compareEvidence(evidence))) {
                        evidenceClassNames.push('evidence-impossible');
                        possible = false;
                    }

                    return (
                        <div className="evidence" key={evidence.code}>
                            <div
                                className={classNames(evidenceClassNames)}
                                onClick={() => (possible ? this.onEvidenceClick(evidence) : null)}
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
        );
    }
}
