
  function payWithPaystack1k(){
    var handler = PaystackPop.setup({
      key: 'pk_live_4585e9a9565b74ab858c7ac4fbc57da489f85f3e',
      email: 'info@getajob.ng',
      amount: 100000,
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      metadata: {
         custom_fields: [
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678"
            }
         ]
      },
      callback: function(response){
          alert('success. transaction ref is ' + response.reference);
      },
      onClose: function(){
          alert('window closed');
      }
    });
    handler.openIframe();
  }


  function payWithPaystack2k(){
    var handler = PaystackPop.setup({
      key: 'pk_live_4585e9a9565b74ab858c7ac4fbc57da489f85f3e',
      email: 'info@getajob.ng',
      amount: 200000,
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      metadata: {
         custom_fields: [
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678"
            }
         ]
      },
      callback: function(response){
          alert('success. transaction ref is ' + response.reference);
      },
      onClose: function(){
          alert('window closed');
      }
    });
    handler.openIframe();
  }


  function payWithPaystack5k(){
    var handler = PaystackPop.setup({
      key: 'pk_live_4585e9a9565b74ab858c7ac4fbc57da489f85f3e',
      email: 'info@getajob.ng',
      amount: 500000,
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      metadata: {
         custom_fields: [
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678"
            }
         ]
      },
      callback: function(response){
          alert('success. transaction ref is ' + response.reference);
      },
      onClose: function(){
          alert('window closed');
      }
    });
    handler.openIframe();
  }


  function payWithPaystack10k(){
    var handler = PaystackPop.setup({
      key: 'pk_live_4585e9a9565b74ab858c7ac4fbc57da489f85f3e',
      email: 'info@getajob.ng',
      amount: 1000000,
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      metadata: {
         custom_fields: [
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678"
            }
         ]
      },
      callback: function(response){
          alert('success. transaction ref is ' + response.reference);
      },
      onClose: function(){
          alert('window closed');
      }
    });
    handler.openIframe();
  }


  function payWithPaystack3k(){
    var handler = PaystackPop.setup({
      key: 'pk_live_4585e9a9565b74ab858c7ac4fbc57da489f85f3e',
      email: 'info@getajob.ng',
      amount: 300000,
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      metadata: {
         custom_fields: [
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678"
            }
         ]
      },
      callback: function(response){
          alert('success. transaction ref is ' + response.reference);
      },
      onClose: function(){
          alert('window closed');
      }
    });
    handler.openIframe();
  }


