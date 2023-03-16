import {EvidenceDOTS, EvidenceORB, EvidenceRADIO} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Yokai: Partial<Ghost> = {
    codeName: 'Yokai',
    name: 'Ёкай',
    evidences: [EvidenceRADIO, EvidenceORB, EvidenceDOTS]
};

export default Object.assign({}, defaultGhostConfig, Yokai) as Ghost;
