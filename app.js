
            function uuidv4() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            }
            const count = document.getElementById('uuid-count');
            const box = document.getElementById('uuid-box');

            function populate() {
                let list = [];
                for(let i=0; i < parseInt(count.value || 5); i++) {
                    list.push(uuidv4());
                }
                box.value = list.join('\n');
            }

            document.getElementById('btn-uuid-gen').addEventListener('click', populate);
            populate();
        