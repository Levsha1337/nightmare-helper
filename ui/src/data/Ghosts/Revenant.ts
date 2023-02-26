import {EvidenceBOOK, EvidenceORB, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Revenant: Ghost = {
    codeName: 'Revenant',
    name: 'Ревенант',
    evidences: [EvidenceORB, EvidenceBOOK, EvidenceTEMP],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Revenant;
