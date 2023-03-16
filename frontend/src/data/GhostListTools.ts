import EvidenceList, {Evidence, EvidenceORB} from './EvidenceList';
import {Ghost} from './Ghost';
import GhostList from './GhostList';
import Mimic from './Ghosts/Mimic';
import {Modifier} from './Modifier';

export default class GhostListTools {
    public static calculatePossibleGhosts(evidences: Evidence[], maxCount: number, speed: number): Ghost[] {
        let list = GhostList;

        if (evidences.length > 0) {
            list = list.filter((ghost) => ghost.resolve(ghost, evidences, maxCount));
        }

        if (speed !== undefined) {
            list = list.filter(
                (ghost) => speed === undefined || ghost.possibleSpeeds.find(([from, to]) => speed > from && speed < to)
            );
        }

        return list;
    }

    public static calculatePossibleEvidences(evidences: Evidence[], maxCount: number, speed: number): Evidence[] {
        // все призраки подходящие по уликам
        const ghosts = GhostListTools.calculatePossibleGhosts(evidences, maxCount, speed);

        // если улик больше чем позволяет сложность
        if (evidences.length > maxCount) {
            // и среди доступных призраков есть мимик
            if (ghosts.find((gh) => gh.codeName === Mimic.codeName)) {
                // то возвращаем улики по мимику
                return evidences;
            } else {
                // иначе мем смешной а ситуация страшная
                return [];
            }
        }

        const possibleCodes: string[] = [];

        ghosts.forEach((gh) => {
            // если уже достигнут лимит по уликам
            if (maxCount === evidences.length) {
                // и призрак - не мимик, то доступны только уже выбранные улики
                if (gh.codeName !== Mimic.codeName) {
                    return possibleCodes.push(...evidences.map((ev) => ev.code));
                } else {
                    // в ином случае возвращаем улики мимика
                    if (evidences.find((ev) => ev.code === EvidenceORB.code)) {
                        // если орб уже выбран то возвращаем все улики мимика, т.к. для него доступна ещё одна - орб не считается
                        return possibleCodes.push(...Mimic.evidences.map((ev) => ev.code));
                    } else {
                        // если орб ещё не выбран то возвращаем выбранные + орб
                        return possibleCodes.push(EvidenceORB.code, ...evidences.map((ev) => ev.code));
                    }
                }
            }

            // сюда попадаем если лимит по уликам ещё не достигнут
            possibleCodes.push(...gh.evidences.map((ev) => ev.code));
        });

        const possibleEvidencesCodes = [...new Set(possibleCodes)];

        return EvidenceList.filter((ev) => possibleEvidencesCodes.includes(ev.code));
    }
    public static calculateModifiersAffect(ghost: Ghost, modifiers: Modifier[]): number {
        let amount = 0;

        if (!ghost.modifiersAffect) {
            return amount;
        }

        modifiers.forEach((modifier) => (amount += ghost.modifiersAffect[modifier.code] || 0));

        return amount;
    }
}
