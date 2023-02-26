import {EvidenceDOTS, EvidenceEMF5, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Oni: Ghost = {
    codeName: 'Oni',
    name: 'Они',
    evidences: [EvidenceEMF5, EvidenceTEMP, EvidenceDOTS],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver,
    modifiersAffect: {
        'EVENT_CLOUD': -1000
    }
};

export default Oni;
