import {EvidenceEMF5, EvidencePRINTS, EvidenceORB} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Obake: Ghost = {
    codeName: 'Obake',
    name: 'Обакэ',
    evidences: [EvidenceEMF5, EvidencePRINTS, EvidenceORB],
    evidenceRequired: EvidencePRINTS,
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Obake;
