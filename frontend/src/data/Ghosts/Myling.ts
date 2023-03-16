import {EvidenceEMF5, EvidencePRINTS, EvidenceBOOK} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Myling: Partial<Ghost> = {
    codeName: 'Myling',
    name: 'Мюлинг',
    evidences: [EvidenceEMF5, EvidencePRINTS, EvidenceBOOK]
};

export default Object.assign({}, defaultGhostConfig, Myling) as Ghost;
