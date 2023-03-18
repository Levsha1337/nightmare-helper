import {EvidenceEMF5, EvidenceRADIO, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Twins: Partial<Ghost> = {
    codeName: 'Twins',
    name: 'Близнецы',
    evidences: [EvidenceEMF5, EvidenceRADIO, EvidenceTEMP],
    possibleSpeeds: [
        [90, 110],
        [120, 140]
    ]
};

export default Object.assign({}, defaultGhostConfig, Twins) as Ghost;
