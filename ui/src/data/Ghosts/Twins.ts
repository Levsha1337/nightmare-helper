import {EvidenceEMF5, EvidenceRADIO, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Twins: Ghost = {
    codeName: 'Twins',
    name: 'Близнецы',
    evidences: [EvidenceEMF5, EvidenceRADIO, EvidenceTEMP],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Twins;
