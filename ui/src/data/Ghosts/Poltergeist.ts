import {EvidencePRINTS, EvidenceBOOK, EvidenceRADIO} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Poltergeist: Ghost = {
    codeName: 'Poltergeist',
    name: 'Полтергейст',
    evidences: [EvidenceRADIO, EvidencePRINTS, EvidenceBOOK],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Poltergeist;
