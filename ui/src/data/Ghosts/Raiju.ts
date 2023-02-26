import {EvidenceDOTS, EvidenceEMF5, EvidenceORB} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Raiju: Ghost = {
    codeName: 'Raiju',
    name: 'Райдзю',
    evidences: [EvidenceEMF5, EvidenceORB, EvidenceDOTS],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Raiju;
