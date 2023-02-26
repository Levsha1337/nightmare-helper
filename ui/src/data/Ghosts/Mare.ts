import {EvidenceBOOK, EvidenceORB, EvidenceRADIO} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Mare: Ghost = {
    codeName: 'Mare',
    name: 'Мара',
    evidences: [EvidenceRADIO, EvidenceORB, EvidenceBOOK],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Mare;
