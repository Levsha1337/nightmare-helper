import {EvidenceORB, EvidenceRADIO, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Onryo: Ghost = {
    codeName: 'Onryo',
    name: 'Онрё',
    evidences: [EvidenceRADIO, EvidenceORB, EvidenceTEMP],
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Onryo;
