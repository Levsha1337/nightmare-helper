import {EvidenceBOOK, EvidenceRADIO, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostResolver, Ghost} from '../Ghost';

const Moroi: Ghost = {
    codeName: 'Moroi',
    name: 'Морой',
    evidences: [EvidenceRADIO, EvidenceBOOK, EvidenceTEMP],
    evidenceRequired: EvidenceRADIO,
    abilities: [],
    facts: [],
    howToProof: [],
    huntPercents: '',
    resolve: defaultGhostResolver
};

export default Moroi;
