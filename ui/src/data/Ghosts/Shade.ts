import {EvidenceBOOK, EvidenceEMF5, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Shade: Ghost = {
    codeName: 'Shade',
    name: 'Тень',
    evidences: [EvidenceEMF5, EvidenceBOOK, EvidenceTEMP],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Shade;
