import {EvidenceBOOK, EvidenceORB, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Revenant: Partial<Ghost> = {
    codeName: 'Revenant',
    name: 'Ревенант',
    evidences: [EvidenceORB, EvidenceBOOK, EvidenceTEMP],
    possibleSpeeds: [
        [50, 70],
        [220, 260]
    ]
};

export default Object.assign({}, defaultGhostConfig, Revenant) as Ghost;
