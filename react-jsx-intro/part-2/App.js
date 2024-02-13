function App() {
    return (
      <div>
        <Tweet
          name="Jane Doe"
          username="janedoe1234"
          date={new Date().toDateString()}
          message="WELCOME!!"
        />
        <Tweet
          name="Jessica Cox"
          username="jcox54321"
          date={new Date().toDateString()}
          message="Follow Me!"
        />
        <Tweet
          name="Carol May"
          username="MayC1960"
          date={new Date().toDateString()}
          message="Do you like me page?"
        />
      </div>
    );
  }