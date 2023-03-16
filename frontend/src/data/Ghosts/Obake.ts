import {EvidenceEMF5, EvidencePRINTS, EvidenceORB} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Obake: Partial<Ghost> = {
    codeName: 'Obake',
    name: 'Обакэ',
    evidences: [EvidenceEMF5, EvidencePRINTS, EvidenceORB],
    evidenceRequired: EvidencePRINTS
};

export default Object.assign({}, defaultGhostConfig, Obake) as Ghost;
