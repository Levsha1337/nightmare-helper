import {EvidenceDOTS, EvidenceEMF5, EvidencePRINTS} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Goryo: Ghost = {
    codeName: 'Goryo',
    name: 'Горё',
    evidences: [EvidenceEMF5, EvidencePRINTS, EvidenceDOTS],
    evidenceRequired: EvidenceDOTS,
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Goryo;
