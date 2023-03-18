import {EvidenceBOOK, EvidenceRADIO, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Moroi: Partial<Ghost> = {
    codeName: 'Moroi',
    name: 'Морой',
    evidences: [EvidenceRADIO, EvidenceBOOK, EvidenceTEMP],
    evidenceRequired: EvidenceRADIO,
    possibleSpeeds: [[90, 175]]
};

export default Object.assign({}, defaultGhostConfig, Moroi) as Ghost;
