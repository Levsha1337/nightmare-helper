import classNames from 'classnames';
import * as React from 'react';
import {Ghost} from '../data/Ghost';
import GhostList from '../data/GhostList';
import GhostListTools from '../data/GhostListTools';
import {calcAffect, Modifier, ModifierInfluence} from '../data/Modifier';

type IProps = {
    possibleGhosts: Ghost[];
    modifiers: Modifier[];
    onGhostClick: (ghost: Ghost) => void;
};

export class SelectGhostMenu extends React.Component<IProps> {
    render(): React.ReactNode {
        const possibleGhostCodes = this.props.possibleGhosts.map((gh) => gh.codeName);

        return (
            <div className="select-ghost-menu">
                {GhostList.map((ghost) => {
                    const ghostClassNames = ['ghost'];

                    let modifiersAffect = calcAffect(
                        GhostListTools.calculateModifiersAffect(ghost, this.props.modifiers)
                    );

                    if (
                        !possibleGhostCodes.includes(ghost.codeName) ||
                        modifiersAffect.influence === ModifierInfluence.EXCLUDES
                    ) {
                        ghostClassNames.push('impossible-ghost');
                    }

                    return (
                        <div key={ghost.codeName} className={classNames(ghostClassNames)}>
                            <div className="ghost-modifier" style={{color: modifiersAffect.markColor}}>
                                {modifiersAffect.mark}
                            </div>
                            <div className="ghost-name" onClick={() => this.props.onGhostClick(ghost)}>
                                {ghost.name}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
