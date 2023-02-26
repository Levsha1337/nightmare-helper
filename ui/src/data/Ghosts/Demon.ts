import {EvidenceBOOK, EvidencePRINTS, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Demon: Ghost = {
    codeName: 'Demon',
    name: 'Демон',
    evidences: [EvidencePRINTS, EvidenceBOOK, EvidenceTEMP],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Demon;
