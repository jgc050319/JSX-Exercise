function App() {
    return (
      <div>
        <Person
          name="Billy"
          age={45}
          hobbies={["running", "chess", "watching sports"]}
        />
        <Person name="Jane" 
        age={16}
        hobbies={["crocheting", "painting", "biking"]} 
        />
        <Person
          name="Jessica"
          age={23}
          hobbies={["cooking", "math games", "reading"]}
        />
        <Person
          name="Miguel"
          age={25}
          hobbies={["building", "hiking", "biking"]}
        />
      </div>
    );
  }