import {EvidenceDOTS, EvidenceEMF5, EvidencePRINTS} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Goryo: Partial<Ghost> = {
    codeName: 'Goryo',
    name: 'Горё',
    evidences: [EvidenceEMF5, EvidencePRINTS, EvidenceDOTS],
    evidenceRequired: EvidenceDOTS
};

export default Object.assign({}, defaultGhostConfig, Goryo) as Ghost;
