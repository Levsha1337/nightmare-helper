import {EvidencePRINTS, EvidenceBOOK, EvidenceRADIO} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Poltergeist: Partial<Ghost> = {
    codeName: 'Poltergeist',
    name: 'Полтергейст',
    evidences: [EvidenceRADIO, EvidencePRINTS, EvidenceBOOK]
};

export default Object.assign({}, defaultGhostConfig, Poltergeist) as Ghost;
