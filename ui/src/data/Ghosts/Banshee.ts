import {EvidenceDOTS, EvidenceORB, EvidencePRINTS} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Banshee: Ghost = {
    codeName: 'Banshee',
    name: 'Банши',
    evidences: [EvidenceORB, EvidencePRINTS, EvidenceDOTS],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Banshee;
