import {EvidenceDOTS, EvidenceORB, EvidencePRINTS} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Banshee: Partial<Ghost> = {
    codeName: 'Banshee',
    name: 'Банши',
    evidences: [EvidenceORB, EvidencePRINTS, EvidenceDOTS]
};

export default Object.assign({}, defaultGhostConfig, Banshee) as Ghost;
