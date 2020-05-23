var handles = ["SELECT STATE", "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Ladakh", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Lakshadweep", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

$(function () {
    var options = '';
    for (var i = 0; i < handles.length; i++) {
        options += '<option value="' + handles[i] + '">' + handles[i] + '</option>';
    }
    $('#listBox').html(options);
});
function selct_district($val) {
    if ($val == 'SELECT STATE') {
        var options = '';
        $('#secondlist').html(options);
    }
    if ($val == 'Andaman and Nicobar Islands') {
        var andaman = ['Nicobars', 'North and Middle Andaman', 'South Andaman'];
        $(function () {
            var options = '';
            for (var i = 0; i < andaman.length; i++) {
                options += '<option value="' + andaman[i] + '">' + andaman[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Andhra Pradesh') {
        var andhra = ['Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Krishna', 'Kurnool', 'Other State', 'Prakasam', 'S.P.S. Nellore', 'Srikakulam', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'Y.S.R. Kadapa',];
        $(function () {
            var options = '';
            for (var i = 0; i < andhra.length; i++) {
                options += '<option value="' + andhra[i] + '">' + andhra[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Arunachal Pradesh') {
        var ap = ['Anjaw', 'Changlang', 'East Kameng', 'East Siang', 'Kamle', 'Kra Daadi', 'Kurung Kumey', 'Lepa Rada', 'Lohit', 'Longding', 'Lower Dibang Valley', 'Lower Siang', 'Lower Subansiri', 'Namsai', 'Pakke Kessang', 'Papum Pare', 'Shi Yomi', 'Siang', 'Tawang', 'Tirap', 'Upper Dibang Valley', 'Upper Siang', 'Upper Subansiri', 'West Kameng', 'West Siang'];
        $(function () {
            var options = '';
            for (var i = 0; i < ap.length; i++) {
                options += '<option value="' + ap[i] + '">' + ap[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Assam') {
        var assam = ['Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima Hasao', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup Metropolitan', 'Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Morigaon', 'Nagaon', 'Nalbari', 'Other State', 'Sivasagar', 'Sonitpur', 'South Salmara Mankachar', 'Tinsukia', 'Udalguri', 'West Karbi Anglong'];
        $(function () {
            var options = '';
            for (var i = 0; i < assam.length; i++) {
                options += '<option value="' + assam[i] + '">' + assam[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Bihar') {
        var bihar = ['Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran'];
        $(function () {
            var options = '';
            for (var i = 0; i < bihar.length; i++) {
                options += '<option value="' + bihar[i] + '">' + bihar[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Chhattisgarh') {
        var Chhattisgarh = ['Balod', 'Baloda Bazar', 'Balrampur', 'Bametara', 'Bastar', 'Bijapur', 'Bilaspur', 'Dakshin Bastar Dantewada', 'Dhamtari', 'Durg', 'Gariaband', 'Janjgir Champa', 'Jashpur', 'Kabeerdham', 'Kondagaon', 'Korba', 'Koriya', 'Mahasamund', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Sukma', 'Surajpur', 'Surguja', 'Uttar Bastar Kanker'];
        $(function () {
            var options = '';
            for (var i = 0; i < Chhattisgarh.length; i++) {
                options += '<option value="' + Chhattisgarh[i] + '">' + Chhattisgarh[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Chandigarh') {
        var Chandigarh = ['Chandigarh'];
        $(function () {
            var options = '';
            for (var i = 0; i < Chandigarh.length; i++) {
                options += '<option value="' + Chandigarh[i] + '">' + Chandigarh[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Dadra and Nagar Haveli and Daman and Diu') {
        var daman = ['Dadra and Nagar Haveli', 'Daman', 'Diu'];
        $(function () {
            var options = '';
            for (var i = 0; i < daman.length; i++) {
                options += '<option value="' + daman[i] + '">' + daman[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Delhi') {
        var delhi = ['Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 'North East Delhi', 'North West Delhi', 'Shahdara', 'South Delhi', 'South East Delhi', 'South West Delhi', 'West Delhi'];
        $(function () {
            var options = '';
            for (var i = 0; i < delhi.length; i++) {
                options += '<option value="' + delhi[i] + '">' + delhi[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Goa') {
        var goa = ['North Goa', 'South Goa'];
        $(function () {
            var options = '';
            for (var i = 0; i < goa.length; i++) {
                options += '<option value="' + goa[i] + '">' + goa[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Gujarat') {
        var gujarat = ['Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha', 'Bharuch', 'Bhavnagar', 'Botad', 'Chhota Udaipur', 'Dahod', 'Dang', 'Devbhumi Dwarka', 'Gandhinagar', 'Gir Somnath', 'Jamnagar', 'Junagadh', 'Kheda', 'Kutch', 'Mahisagar', 'Mehsana', 'Morbi', 'Narmada', 'Navsari', 'Panchmahal', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha', 'Surat', 'Surendranagar', 'Tapi', 'Vadodara', 'Valsad'];
        $(function () {
            var options = '';
            for (var i = 0; i < gujarat.length; i++) {
                options += '<option value="' + gujarat[i] + '">' + gujarat[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Haryana') {
        var haryana = ['Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurugram', 'Hisar', 'Italians', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Nuh', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'];
        $(function () {
            var options = '';
            for (var i = 0; i < haryana.length; i++) {
                options += '<option value="' + haryana[i] + '">' + haryana[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }


    if ($val == 'Himachal Pradesh') {
        var himachal = ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul and Spiti', 'Mandi', 'Shimla', 'Sirmaur', 'Solan', 'Una'];
        $(function () {
            var options = '';
            for (var i = 0; i < himachal.length; i++) {
                options += '<option value="' + himachal[i] + '">' + himachal[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Jammu and Kashmir') {
        var jammu = ['Anantnag', 'Bandipora', 'Baramulla', 'Budgam', 'Doda', 'Ganderbal', 'Jammu', 'Kathua', 'Kishtwar', 'Kulgam', 'Kupwara', 'Mirpur', 'Muzaffarabad', 'Pulwama', 'Punch', 'Rajouri', 'Ramban', 'Reasi', 'Samba', 'Shopiyan', 'Srinagar', 'Udhampur'];
        $(function () {
            var options = '';
            for (var i = 0; i < jammu.length; i++) {
                options += '<option value="' + jammu[i] + '">' + jammu[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Jharkhand') {
        var jharkhand = ['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 'Ramgarh', 'Ranchi', 'Sahibganj', 'Saraikela-Kharsawan', 'Simdega', 'West Singhbhum'];
        $(function () {
            var options = '';
            for (var i = 0; i < jharkhand.length; i++) {
                options += '<option value="' + jharkhand[i] + '">' + jharkhand[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Karnataka') {
        var karnataka = ['Bagalkote', 'Ballari', 'Belagavi', 'Bengaluru Rural', 'Bengaluru Urban', 'Bidar', 'Chamarajanagara', 'Chikkaballapura', 'Chikkamagaluru', 'Chitradurga', 'Dakshina Kannada', 'Davanagere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Kalaburagi', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysuru', 'Other State', 'Raichur', 'Ramanagara', 'Shivamogga', 'Tumakuru', 'Udupi', 'Uttara Kannada', 'Vijayapura', 'Yadgir'];
        $(function () {
            var options = '';
            for (var i = 0; i < karnataka.length; i++) {
                options += '<option value="' + karnataka[i] + '">' + karnataka[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Kerala') {
        var kerala = ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'];
        $(function () {
            var options = '';
            for (var i = 0; i < kerala.length; i++) {
                options += '<option value="' + kerala[i] + '">' + kerala[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Ladakh') {
        var Ladakh = ['Kargil', 'Leh'];
        $(function () {
            var options = '';
            for (var i = 0; i < Ladakh.length; i++) {
                options += '<option value="' + Ladakh[i] + '">' + Ladakh[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }


    if ($val == 'Madhya Pradesh') {
        var mp = ['Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa', 'Khargone', 'Mandla', 'Mandsaur', 'Morena', 'Narsinghpur', 'Neemuch', 'Niwari', 'Other Region', 'Panna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha'];
        $(function () {
            var options = '';
            for (var i = 0; i < mp.length; i++) {
                options += '<option value="' + mp[i] + '">' + mp[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Maharashtra') {
        var maharashtra = ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai', 'Mumbai Suburban', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Osmanabad', 'Other State', 'Palghar', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara', 'Sindhudurg', 'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal'];
        $(function () {
            var options = '';
            for (var i = 0; i < maharashtra.length; i++) {
                options += '<option value="' + maharashtra[i] + '">' + maharashtra[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Manipur') {
        var manipur = ['Bishnupur', 'Chandel', 'Churachandpur', 'Imphal East', 'Imphal West', 'Jiribam', 'Kakching', 'Kamjong', 'Kangpokpi', 'Noney', 'Pherzawl', 'Senapati', 'Tamenglong', 'Tengnoupal', 'Thoubal', 'Ukhrul'];
        $(function () {
            var options = '';
            for (var i = 0; i < manipur.length; i++) {
                options += '<option value="' + manipur[i] + '">' + manipur[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Meghalaya') {
        var meghalaya = ['East Garo Hills', 'East Jaintia Hills', 'East Khasi Hills', 'North Garo Hills', 'Ribhoi', 'South Garo Hills', 'South West Garo Hills', 'South West Khasi Hills', 'West Garo Hills', 'West Jaintia Hills', 'West Khasi Hills'];
        $(function () {
            var options = '';
            for (var i = 0; i < meghalaya.length; i++) {
                options += '<option value="' + meghalaya[i] + '">' + meghalaya[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Mizoram') {
        var mizoram = ['Aizawl', 'Champhai', 'Hnahthial', 'Khawzawl', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Saiha', 'Saitual', 'Serchhip'];
        $(function () {
            var options = '';
            for (var i = 0; i < mizoram.length; i++) {
                options += '<option value="' + mizoram[i] + '">' + mizoram[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Lakshadweep') {
        var Lakshadweep = ['Lakshadweep'];
        $(function () {
            var options = '';
            for (var i = 0; i < Lakshadweep.length; i++) {
                options += '<option value="' + Lakshadweep[i] + '">' + Lakshadweep[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Nagaland') {
        var nagaland = ['Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Peren', 'Phek', 'Tuensang', 'Wokha', 'Zunheboto'];
        $(function () {
            var options = '';
            for (var i = 0; i < nagaland.length; i++) {
                options += '<option value="' + nagaland[i] + '">' + nagaland[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }


    if ($val == 'Odisha') {
        var Odisha = ['Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack', 'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghpur', 'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangapur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur', 'Sundargarh'];
        $(function () {
            var options = '';
            for (var i = 0; i < Odisha.length; i++) {
                options += '<option value="' + Odisha[i] + '">' + Odisha[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Puducherry') {
        var puducherry = ['Karaikal', 'Mahe', 'Puducherry', 'Yanam'];
        $(function () {
            var options = '';
            for (var i = 0; i < puducherry.length; i++) {
                options += '<option value="' + puducherry[i] + '">' + puducherry[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Punjab') {
        var punjab = ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Mansa', 'Moga', 'Pathankot', 'Patiala', 'Rupnagar', 'S.A.S. Nagar', 'Sangrur', 'Shahid Bhagat Singh Nagar', 'Sri Muktsar Sahib', 'Tarn Taran'];
        $(function () {
            var options = '';
            for (var i = 0; i < punjab.length; i++) {
                options += '<option value="' + punjab[i] + '">' + punjab[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Rajasthan') {
        var rajasthan = ['Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara', 'Bikaner', 'BSF Camp', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 'Evacuees', 'Ganganagar', 'Hanumangarh', 'Italians', 'Jaipur', 'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur', 'Other State', 'Pali', 'Pratapgarh', 'Rajsamand', 'Sawai Madhopur', 'Sikar', 'Sirohi', 'Tonk', 'Udaipur'];
        $(function () {
            var options = '';
            for (var i = 0; i < rajasthan.length; i++) {
                options += '<option value="' + rajasthan[i] + '">' + rajasthan[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

    if ($val == 'Sikkim') {
        var sikkim = ['East District', 'North District', 'South District', 'West District'];
        $(function () {
            var options = '';
            for (var i = 0; i < sikkim.length; i++) {
                options += '<option value="' + sikkim[i] + '">' + sikkim[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }


    if ($val == 'Tamil Nadu') {
        var tn = ['Railway Quarantine', 'Airport Quarantine', 'Other State', 'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kancheepuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thiruvallur', 'Thiruvarur', 'Thoothukkudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvannamalai', 'Vellore', 'Viluppuram', 'Virudhunagar'];
        $(function () {
            var options = '';
            for (var i = 0; i < tn.length; i++) {
                options += '<option value="' + tn[i] + '">' + tn[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }


    if ($val == 'Telangana') {
        var telangana = ['Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhupalapally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 'Komaram Bheem', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal Malkajgiri', 'Mulugu', 'Nagarkurnool', 'Nalgonda', 'Narayanpet', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Ranga Reddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal Rural', 'Warangal Urban', 'Yadadri Bhuvanagiri'];
        $(function () {
            var options = '';
            for (var i = 0; i < telangana.length; i++) {
                options += '<option value="' + telangana[i] + '">' + telangana[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }


    if ($val == 'Tripura') {
        var tripura = ['Dhalai', 'Gomati', 'Khowai', 'North Tripura', 'Sipahijala', 'South Tripura', 'Unokoti', 'West Tripura'];
        $(function () {
            var options = '';
            for (var i = 0; i < tripura.length; i++) {
                options += '<option value="' + tripura[i] + '">' + tripura[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }


    if ($val == 'Uttar Pradesh') {
        var up = ['Agra', 'Aligarh', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Ayodhya', 'Azamgarh', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kushinagar', 'Lakhimpur Kheri', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'Prayagraj', 'Rae Bareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar', 'Shahjahanpur', 'Shamli', 'Shrawasti', 'Siddharthnagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'];
        $(function () {
            var options = '';
            for (var i = 0; i < up.length; i++) {
                options += '<option value="' + up[i] + '">' + up[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }


    if ($val == 'Uttarakhand') {
        var uttarakhand = ['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'];
        $(function () {
            var options = '';
            for (var i = 0; i < uttarakhand.length; i++) {
                options += '<option value="' + uttarakhand[i] + '">' + uttarakhand[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }


    if ($val == 'West Bengal') {
        var wb = ['Alipurduar', 'Bankura', 'Birbhum', 'Cooch Behar', 'Dakshin Dinajpur', 'Darjeeling', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 'Kolkata', 'Malda', 'Murshidabad', 'Nadia', 'North 24 Parganas', 'Other State', 'Paschim Bardhaman', 'Paschim Medinipur', 'Purba Bardhaman', 'Purba Medinipur', 'Purulia', 'South 24 Parganas', 'Uttar Dinajpur'];
        $(function () {
            var options = '';
            for (var i = 0; i < wb.length; i++) {
                options += '<option value="' + wb[i] + '">' + wb[i] + '</option>';
            }
            $('#secondlist').html(options);
        });
    }

}