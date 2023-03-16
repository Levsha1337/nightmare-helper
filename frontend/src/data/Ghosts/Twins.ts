import {EvidenceEMF5, EvidenceRADIO, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Twins: Partial<Ghost> = {
    codeName: 'Twins',
    name: 'Близнецы',
    evidences: [EvidenceEMF5, EvidenceRADIO, EvidenceTEMP],
    possibleSpeeds: [
        [1.39, 1.49],
        [1.71, 1.81]
    ]
};

export default Object.assign({}, defaultGhostConfig, Twins) as Ghost;
