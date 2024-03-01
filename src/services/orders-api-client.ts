const ordersApiClient = {
  submit: (data: unknown) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldSimulateSuccess = true;
        if (shouldSimulateSuccess) {
          alert(JSON.stringify(data, null, 2));
          console.log("Submit!", data);
          resolve("Data submitted successfully!");
        } else {
          reject(new Error("Failed to submit data"));
        }
      }, 1500);
    });
  },
};

export default ordersApiClient;
