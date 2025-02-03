type Step = {
    title: string;
    description: string;
    image: string;
}

type StepsProps = {
    steps: Step[];
}

export type { Step, StepsProps };
