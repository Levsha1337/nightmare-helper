import {EvidenceEMF5, EvidencePRINTS, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Jinn: Ghost = {
    codeName: 'Jinn',
    name: 'Джинн',
    evidences: [EvidenceEMF5, EvidencePRINTS, EvidenceTEMP],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Jinn;
