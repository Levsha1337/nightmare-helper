/**
 * Out of video: https://youtu.be/aSdD89Y1vbc
 *   64 bpm (1 ms) Revenant slowest
 *  100 bpm (1.5 ms) slow twin
 * ~131 bpm (1.9?ms) fast twin
 */
import React from 'react';
import {observer} from 'mobx-react';
import {action, makeObservable, observable} from 'mobx';

// const BPM_IN_METER = 71.875;
// const BPM_IN_METER = 64;
const BPM_IN_METER = 66.6;

type IProps = {
    applyGhostSpeed: (speed: number) => void;
    ghostSpeedModifier: number;
};

@observer
export class StepsClicker extends React.Component<IProps> {
    clicks = 0;
    totalBeats = 0;
    lastBpm = 0;
    lastClicked = new Date().getTime();

    speed: number = 0;
    speedApplied: boolean = false;

    constructor(props: IProps) {
        super(props);

        makeObservable(this, {
            speed: observable,
            speedApplied: observable,
            applyGhostSpeed: action,
            clearGhostSpeed: action
        });
    }

    bpmClicker = () => {
        this.clicks++;

        const timeNow = new Date().getTime();
        const bpm = Math.round((60 / (timeNow - this.lastClicked)) * 1000);

        this.totalBeats += bpm;
        this.lastClicked = timeNow;

        if (
            (this.difference(this.lastBpm, bpm) > 30 && this.lastBpm < 150) ||
            this.difference(this.lastBpm, bpm) > 50 ||
            timeNow - this.lastClicked > 3000
        ) {
            this.clicks = 1;
            this.totalBeats = bpm;
        }

        this.lastBpm = bpm;

        const displayedBPM = Math.round(this.totalBeats / this.clicks);
        const displayedMeters = Math.round((displayedBPM * 100) / BPM_IN_METER / this.props.ghostSpeedModifier) / 100;

        this.speed = displayedMeters;
    };

    difference = (a: number, b: number): number => {
        return Math.abs(a - b);
    };

    applyGhostSpeed = (speed: number): void => {
        this.speedApplied = true;

        this.props.applyGhostSpeed(speed);
    };

    clearGhostSpeed = () => {
        this.speedApplied = false;

        this.props.applyGhostSpeed(undefined);
    };

    override render() {
        return (
            <div className="steps-clicker">
                <div
                    className="steps-button"
                    onClick={() => this.bpmClicker()}
                    onContextMenu={(e) => e.preventDefault()}
                    onDoubleClick={(e) => e.preventDefault()}
                    style={{
                        backgroundColor: this.speedApplied ? 'palegoldenrod' : undefined
                    }}
                >
                    {this.speed} m/s ({Math.round(this.totalBeats / this.clicks)} bpm)
                </div>
                <div className="steps-apply" onClick={() => this.applyGhostSpeed(this.speed)}>
                    Применить
                </div>
                <div className="steps-clear" onClick={() => this.clearGhostSpeed()}>
                    Сбросить
                </div>
            </div>
        );
    }
}
