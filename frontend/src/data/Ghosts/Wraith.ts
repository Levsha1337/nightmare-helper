import {EvidenceDOTS, EvidenceEMF5, EvidenceRADIO} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Wraith: Partial<Ghost> = {
    codeName: 'Wraith',
    name: 'Мираж',
    evidences: [EvidenceEMF5, EvidenceRADIO, EvidenceDOTS]
};

export default Object.assign({}, defaultGhostConfig, Wraith) as Ghost;
