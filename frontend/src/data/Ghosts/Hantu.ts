import {EvidenceORB, EvidencePRINTS, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Hantu: Partial<Ghost> = {
    codeName: 'Hantu',
    name: 'Ханту',
    evidences: [EvidencePRINTS, EvidenceORB, EvidenceTEMP],
    evidenceRequired: EvidenceTEMP,
    possibleSpeeds: [[70, 190]]
};

export default Object.assign({}, defaultGhostConfig, Hantu) as Ghost;
