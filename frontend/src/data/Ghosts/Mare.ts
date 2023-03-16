import {EvidenceBOOK, EvidenceORB, EvidenceRADIO} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Mare: Partial<Ghost> = {
    codeName: 'Mare',
    name: 'Мара',
    evidences: [EvidenceRADIO, EvidenceORB, EvidenceBOOK]
};

export default Object.assign({}, defaultGhostConfig, Mare) as Ghost;
