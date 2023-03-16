import {EvidenceDOTS, EvidencePRINTS, EvidenceRADIO} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Phantom: Partial<Ghost> = {
    codeName: 'Phantom',
    name: 'Фантом',
    evidences: [EvidenceRADIO, EvidencePRINTS, EvidenceDOTS]
};

export default Object.assign({}, defaultGhostConfig, Phantom) as Ghost;
