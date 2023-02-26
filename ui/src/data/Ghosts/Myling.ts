import {EvidenceEMF5, EvidencePRINTS, EvidenceBOOK} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Myling: Ghost = {
    codeName: 'Myling',
    name: 'Мюлинг',
    evidences: [EvidenceEMF5, EvidencePRINTS, EvidenceBOOK],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Myling;
