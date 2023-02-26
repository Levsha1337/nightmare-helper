import {EvidenceORB, EvidencePRINTS, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Hantu: Ghost = {
    codeName: 'Hantu',
    name: 'Ханту',
    evidences: [EvidencePRINTS, EvidenceORB, EvidenceTEMP],
    evidenceRequired: EvidenceTEMP,
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Hantu;
