import * as React from 'react';

interface PackageProps {}

interface PackageState {
  test?: string;
}

class Package extends React.Component<PackageProps, PackageState> {
  public constructor(props: PackageProps) {
    super(props);
    this.state = {
      test: 'hello',
    };
  }

  public render(): JSX.Element {
    return <span>{this.state.test}</span>;
  }
}

export default Package;
