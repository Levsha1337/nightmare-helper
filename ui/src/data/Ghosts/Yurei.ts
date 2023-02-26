import {EvidenceDOTS, EvidenceORB, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Yurei: Ghost = {
    codeName: 'Yurei',
    name: 'Юрэй',
    evidences: [EvidenceORB, EvidenceTEMP, EvidenceDOTS],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Yurei;
