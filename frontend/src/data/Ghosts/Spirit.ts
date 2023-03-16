import {EvidenceBOOK, EvidenceEMF5, EvidenceRADIO} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Spirit: Partial<Ghost> = {
    codeName: 'Spirit',
    name: 'Дух',
    evidences: [EvidenceEMF5, EvidenceRADIO, EvidenceBOOK]
};

export default Object.assign({}, defaultGhostConfig, Spirit) as Ghost;
