import {EvidenceEMF5, EvidencePRINTS, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Jinn: Partial<Ghost> = {
    codeName: 'Jinn',
    name: 'Джинн',
    evidences: [EvidenceEMF5, EvidencePRINTS, EvidenceTEMP]
};

export default Object.assign({}, defaultGhostConfig, Jinn) as Ghost;
