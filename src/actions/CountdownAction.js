const CountdownAction = dispatcher =>
    ({
        tick(currentCount) {
            dispatcher.handleAction({ type: 'TICK' })
        },
        tick_to_up(currentCount) {
            dispatcher.handleAction({ type: 'TICK_UP' })
        },
        reset(count) {
            dispatcher.handleAction({
                type: 'RESET',
                count
            })
        }
    });
export default CountdownAction;
