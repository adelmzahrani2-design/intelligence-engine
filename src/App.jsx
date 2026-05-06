import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Target, Dumbbell, MessageCircle, BookOpen, Heart, RefreshCw, Wallet,
  ShieldCheck, Users, Brain, Star, Calendar, ChevronLeft, Sparkles, Award,
  TrendingUp, Home, ArrowRight, ExternalLink, ClipboardList, Lightbulb,
  Trophy, Lock, Send, Loader2, X, Check, Briefcase, User, Zap, Flame,
  Rocket, BookMarked, BarChart3, AlertTriangle, Info, Play, GraduationCap,
  Building2, Eye, Map, HelpCircle, Youtube, Search
} from 'lucide-react';
import {
  LineChart, Line, RadarChart, Radar, PolarGrid, PolarAngleAxis,
  ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid
} from 'recharts';

// ═══ AVATARS (base64 — Mohammed Al-Nuhayet & Adel Alzahrani) ═══
const MUHAMMAD_PHOTO = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADIAMgDASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAAUEBgEDBwII/8QAOxAAAgEDAwIEBAMHAgYDAAAAAQIDAAQRBRIhMUEGE1FhFCIycRWBkQcjQlKhsdEzwRZicoLh8CRD8f/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAAECBQb/xAAtEQACAgEEAQIFAwUBAAAAAAAAAQIDEQQSITFBE1EFIjJh8BRCsRUjcYGhwf/aAAwDAQACEQMRAD8A+faKKKYMBRRRUIFFFeo4mkbCjNTOCHmvccLyHCqTTO10hmw0nFNYbSOEYVRSlmqjHhchY1N9iWDSZJBluKnRaPGv1c0zAArOKSlqJyDKuKIqWMSDAFb1QKuBxXrBoxQXJvsIkkeSMVhow64Ne8UVWSEV7KJ+CKiS6RG308U1rGKJG2UemZcEyvT6VJGMrzUJ4njOGUiraVrTNaRzDDLTMNW19QOVS8FVoprdaSy5KUseNo2wwxT0LIz6ASi49nmiiiiGQoooqECiiioQKKKKhAooqdYWDXDgkfLWZSUVllpNvCNVrZvcPgDin9rYRwKOMmt8FukCAKK21yrb3PhdDUK1EwBjpRWaKWCmKK1zTCIgAbmPQVGa6O7BlC+yrmrSbKyTfzrKqzuFRSzHgADJNNrDwff3EdnPdSzRxXTfKowXYdyFHP8AjvirrDoVjpniW0WzifZGAAk+2JSw9XOd5z12ilbNTCHC5YSMGyjWnh7ULq+S1MPkyNyfM42j1PpTSw8Gtdaz8C94oA53rgZ+2TV6tLOeDxU11b2l26NkOk8iwxEH0U8lfvzUnT1todfmibWoJLacNtSLCMCf5SB1H9qRnrJ87fYMql5KVp/gqCXW5rSVblkjzwyFXOO+O/5VC/4HuZrya3t5l3RgnD9a6Jplz5F3dyq+pyvbcPBkOWUnHXrx/ajTms4YNQnivZIwMMkckQLxH2B7dqF+rtTb/wAF+nFnIJ9HvoN5MBkRPqaP5gP0qDiu22Nju02+uEihmedCymJvLBx1Gz1+1Vm78KafqGjtcR/JduDIgBCv8v1Db0P5c03Xrk3iSBup+DnBXPWod1YRzqeMGnupaHd6XbpcyqGtX+mZeV+x9KXKQw4IP2rpQs/dFgJR8Mqt1Zvbvgjio9W2a3SdMMAar99YtbuSB8tdSnUKfD7FZ17eUQqKKKbBBRRRUIFFFe4ozJIFA61G8EN1natcygAcVZreBYIgoFadPtBbwjj5jUyuPfdveF0OVw2oKMUUUsFMVrml8qLcBknoPWplnZz6heR2tsnmTSnCr0yfvTfXtOtLbwREskKR3wuDh0Bw46EE98Hv07DNYdijJRfkmG1ko810VmBclWHtXoX8PBVSjg/UDXgXCKojmiWRR/Sj4awlGUnaJiejcinMLygQ9fxVe3VvHBLfLtjAVR5SqcDoCVxx7e9N7rxxd6leW9xe2emXLwKApBeP5V7Hk1STpeQSlzE+PfFeDpdyPpCvn+VgaC6Kmb3yOmz+Pp7zUre/n0xUmjYFjbzjDAdBhu9NY/2l2n4nNcfgPkxkfIRGrlCBweDzzXGza3aA/upOvbNYX4yM/L5qn86A/h9Mlj8/k2rpI7XaftLtZnuUuy1s9xGV+IFuwZT/ANtbYv2haXBpcSyXdvO7q0cqvE2/HbJx0xXElvr5D/qSA1t/GbxRt3/qtDfwyt9fn/C1fI7TceKPC1xBp9tZX0dsozmQsQ0RPbpyKk6lr+jXDafbHV7G6i5WR4nCFWH8XPQ/3rh41u5C4Oxu/KjrXg6vMfqWM/8AYKz/AExe7L9c7dqeraTqItbOLUbKSCWMqzblTcQejDtn19a534s0rStPumk0e4R4s4aNXGU+2Dz71U31SR1wY4vvsrWL5w+4Ko/Kj0aN0vKkYnapdoZR3bgchmHvwa2ssd5b5HOaSNdSvwTTHSpAFZHyGY5GRTco7VuQNPPAovLVreUgjio1We/tRPCcDkVWpIzG5U9q6NFvqR57Fpw2s80UUUwDCm+jWm5vMYcUrhjMsqqO9WyzgEMCrSmqs2xwvIWqOXk3gcVis0YrkjZiis080ixtHsvOumDFnwsaDL4Ht71iclFZZaWSX4ItJ3vbq8htlnMELbVbpkjv6D1NOdQtoJ/DRtY47fWbxBhlRCvkA9x3bnp/SlFpqvwiX0emRSus1uufJ+UMv8Z2kdQc/wBakw6ze2k0FzZ26xafMyxgvGdyShcfNjlv7c0jYpynuDJpLBzy+0R7MhJiUmOS0WOUA9aiQaNfXe74a1nm2jJ2RlsfpXSBNejV7+2vfw2K5uOJJlYB0Hqv+Khrf29qslpqN9cXloFzC2Hi2nkdyOP1p6OpnjrLAutFLfwzq8dot09nJHAx2qzEAE1sXw3r6RebFYzyR4zuhw4A99pOKb2+tfAebDbpFLG/HmAMrH7E5wP0qCt/dwzGW2upLdiTzG5XGe2aN6lr9jOIkOHS9faAzQ2V9LEDy8cTOAfuBUY398hxJI+RwQ/+K6LoHjqRLWPT9QRETzA63kQ2SI3TLAcNx361Ztfe2XT7Ox1DTrSZb+Y+ZdKAxdezhh0NKy1c4T2zgEVaaymcVXVrofxIR/zIKDqcj/XDCxPH011Cw8D6QkWoTJDFqVsIY3Uk4dDnnHcGoEfgWx021t9QSFdUjeb5kKsQq9kIHft+lbWspb6K9KRz/wDEcnPw1vx6LXn8QjJB+Dh9ziu1aromiaPcQPdWyxQyjzFSC1RfLB7FiOtJtf8AEnhm3mUWFnYTBenk2ys54/iZgFz9gaxDWKzGyDZbqx2zlpvk6i1TH2zW+Bb69x8Jpjy+8cRb/arqmu2l7ZljY6YJ1lBEUcflSOv/AFYwT7DFeZ2KwX+ozWt4rD92IJiwSMHHII5o3rvpxx/sxs+5V30zVhseaGK2UuIxuZd2T/yjmo3wMiSwzG4EmT0CkY6+v2q4Wtgy/ALa6GW+JCzedvJIPIyD2AODSe+s7iG5ie7uVkm2YKdGT7/5q4XZePz/ANI44NBHHNItXtdreYo4p8aj3cImgZTRqZ7JZMTjuWCp0V7mjMcpU9qK7SeRIYaNb+ZPuI4FWQDApXokO2HcR1pqRmuPqZ7pscqWImMUVnFFLhQx7Vc9MtvJtoY7bTGuX4Bkf5WVjnke2R/SqxpVtJdapBHEiuQ27aTgHHJq13S3U0scVxqqD5ynlowV1ynzc+3HFKaiWcRCQXk1WlvqVxNbxOlou+0ZC3CPADkFuPUj+tapo7lvD++51C7Sayl8sRxEPvAPBHuPWlL3EdxFHcS3s13cx5hePyScxj+FsdO5zmtU1tbjzLm18y3w2I4mcKx45JOchR+tZUOef4JkNW1OzfTzO0MtxdofmuZwY2X0GBwapuoavearei4vJ3lYAKoY8KPQVt1nUpb2Xa0pkyd7nPVsf2AqDaReddRp6munTUoRywEpZY6hiaRR700ttJaXHGfyrNlbrGBLNgIvNS31e5iXNnbeYPXb0pec5N4ibSXk2p4YlkXMY5p14bW70i5SLUtOlvbGImSIIMmJ8dcdwehFJbLxTqkUw8yKPHXGCKu+i+JEugqyxqjEdBSOodqi1JZQWCjngrl/qa/GrNo9jcW8vIn3hgrL1C4Poec1N1DxpqtzYi0trZ4XIAkCDCuf5iAOvTv2q4M9tMpk2qSaiS/CwRl9i0orYPGYZwE2v3OaX6a9qKAXcs8iA5CuxIH/AL70mm0udDhhj2roGr+Jba1OwQh/ccYqt/jlhfysrxtG326106rLMZ24QCUV7lZlheMDPQVu0/XrqG8S3lvJzAWB2l8jI6DByMVP1CKORRJCQyHvVUvIzFcsDx3FOwSsWGCeY9HQZrqKaabVJ72SO3niMMcUZ2yA9MY6YqNdxaekHlrNPdXqRDO9SCoJGBn2BpZol60oiVRE0sw2AuudrDnOO9O47q5lyLaazurjJ+IaRdpC8DGTjIpSUXB4Cp5EjKVYqwKkHBBGCKwRkVKvoXhumMkqyNIS2V6YzgY9qjUZPKyZK5q8HlzbgOtFT9Zh3Q7vSiuxp55gsiVkcSJ2nxiO2AFSq8ogRcDpXquPJ5eRxLCCiijFUWM9ES3MlxLcylFjjJCjq/tUi/OkuLmK3jlvJw0ZVHDBzgfMwI9eP0rOkl4tLnMdgty0gYgvxgYAOD681LnvtTsrlbhkjsra5URq0gUyQYGM8/79aVk3veP5Nroj/EtCqarYWNrbW6L5PmSMS3TowHU1UNcv7WZvKs4hjrJLggu3oB2X+tNNR1GeaWS1S8uJ4DucS/SG9SF6CksLRi3VSoOeuetNUw2/MzEnngSnrTjQLbzJmkPQcA1H1GyWICWI5Q8EelWLw5abdPQ45c5FM22JQygcVyb5yokRWGVUdPU1El8Q3EMT+QoVIx9Crkj3J7Vcf+H45YRJuO9hjjAqCnh+5si6iGG4jPUhgCfuDXOjdW+wziynpq1/eSs0Sq5Vd7YXGPWmuk6xJJdRL9LE/wDv3qyDTZpVCrZW8AYbSQBkj8q3QeFo4ZhO8aqEIJIXBJqTvraw0RQkWywsppNP8xnwMZqleIdYe2maANgDqc102CJYtHUnkYzXNNY8PyajK1yC3LMGx1HPH9K5ullFzbn0HsTS4KfcaqJZBmPcCcAtxn7VlLnTrn5Cm1h/Kehp5N4bsmtRa3KyqFbeGUDJPuaXz+HoLe1eO2EmCd24kAg+x7V2FZW+ELNSIw3RSBUbzEc0p1yDY6SevBp9Z6XcMiEoSV6nHFL/ABDDtsg2OQ1Frkt6SMtcCOwmEd5Dv5TfyKukW2aUabHYxXBfb50kedx9/biqRb28k7fIucVZ2kjaxNxZwyRyAKJHVug6HHpk1u9ZaKgSrlbJFkht7W5ikt/lZpecjceT6VEpuBdvp0NtHdeVGE3zGdAFbPo3f7Uo47HPvS8Hk2yNfoHtiDRUh0Drg9KKart2LAKUcvJuArBGKEcOu4dK9YpYKeazQRRirIOQ3lWMFhd6lHb20sPmtGVJYAsSNp6Z4FV+a9nu1uI43a4igIJaRRuZc9z1x7ZqTqTJLYzRxSKBEodnb5m56KP5R7VC0+KSSJXRwgDF7gr1VRjt3qoRSW5kb8GWtDdWZv8A4ny4w4RkAJ2Z/wBqjrDFJqCrFwgYD7j1FXLSrW91VZbaK3ih06ds9l3jPUH/AGpJe20FrdrbWs7T/DysGyuML9/Y8VUbctxI4+RZq8X7vZGAFxluPerNo8Ki1gjHUYpNqeWjkcIdrKQcL9PtTHw/PmNDnoO9VY26y4/UdG0WNUjAkwR7in3wNu4ywUj3AqrabfARAbhj3PSnX4skURJINcC2Mt3A5FrBNZIYFOyJF9PWk1yu9icg4IOM0q1PxHeXW9LNSqj6nx29ql2VvBHJDIkrSOyfNuPBNaVTgsyKcs8Is+AuijjquKryqQGAIwWDYqyGQDTlTAJ25xVUvLYXF5lp3h2KSAvc0OnnOS5E6SzgnXEkeSe1Rx4esxcAmD2ORwKh6V4h3uYZsM6kgP607a+jdeDz1osvUg8GVhiLV7KO2U+WAB7DrXM/Ew2RSRju4xXSdauUMR+Yk+9c41YLcX8cTc735+wrp6LK5YC0hvZPbWStGPLXg7vWm+mTSQWFm8VsBFI5inyMhm7H9K2XJih0MtL8yjACms6TLdR2S3HxINqUKzgciH0OPWmpSco8+4NLDC6ElrbypcMt4JXKNEh+WM9jS/pRiPOYJXePHIfglvU/l0oq0sEZiisOwRcnpRW0m+jOTxp8gktQRUqlOhzb4Np7U2q7Y7ZtFQeUFFFFDNhdCSew2pAHMQyXB5A7DHf7140cQLG0hj8p4Icq7NhXJzwQfWvbLuRlOQHGDipUYjg06UOUuLaJFPknIZWPQ59KpvEcE8k/QUbVba30fDQ3GHmjcsfLCntx05rOvQNZW8KiCzF5cK0EkiNyHB4P5il2k6kNKkgeEbDPlZYwSSyHjj0/8VYNXsLHR5by3gWW9uLmNZIoinBHXjvkdaXlmNn2/Mm1zEVwW63+iiUMN7J84z3A70q0eQx2rdMrSe8utQ09nVZHt1ucu0Y4xk+napWl3GICgOdwzTXpNRbzwwe7ktenahlc5PtUi81tAvls/OOlVzRboS3/AJJONz9PvzSbVhcfjdwmXA3Z464oSoUp4Zre0jpVvqdumlsUZRx1qlL4qvdL1H/VMkAOVGOQPvUPSXikmWLz52c8eXt654qZceG1aSTzmljwdoGzp6CrjVXW2p+SOTa4L5b+N7aawWY3CbdmfqAx96pN542u7/UWFuwVHO3djt7VAfwzGrlDdME9CmCKx+AW0RG295z/AC1VdFEG2uSSnNlvWaH4CKUEZUdR3qdBrGbZXRgy4655Fc9uJZoJNkF7G6/y7uT+VTvDM1xcXE4J2xhCX9KzPTrbubLU+cFg1HUDMQN2OtVmFDf66fmZViGdwGeTW65ud00mG+VeK3eG5La2hnvLliHkYlFHJIFEjH04NopvLNeuhVsPLMhB3AIpGM+tSLcRxaSJ7aMTNKgieAjKowH1E1F1kPqFzavGwPnglFHVeeAa33cm/wAuNB8OEUebCmQN/ct6mr/akV5NBO4liACxyQPWis1g1ohFv3CWxJoqJrcu2Hb60V0tPXmGRayWGQNFuPLn2E9as45FUiCQxTKw7GrjZTie3VgaHrK8PcXTLjBvxRUmzsLi/mEcEZbH1N/Co9Se1OxpVhpi/H/iME8UDANvjPznrhQeDXMlYo8eRlRbEKWtxLEZUhkaMHBYKSM15vBJFbNE7PbFVBcd29AR2pjqeqRNMNTs5Z7MO/EB6sR3GOAKTXV42p3txMIvKadQzbm3DjuauG6XLRHhGmS4kWCCZJPMkLZDP9Skeh9KuN7c7vD9preo3bTXkcii3eFsn3RuwqmxW5vVT5VIyAXUEbAPWrCbCxitLq3gure4hltiyq7YZXxkY96q5RbRI5KZrYfzw0pZpnG9+cgZJOBWvT52QqOx4/Si4l3l8RbCAExnOK1RLsiDjkBiP6U+l8uGC8jEStaaqtyvGTxj1FWzSW0/WrqSQ/6rDC5HIx/aqhHiWHbIwJJyPvTfwxcLb6iUX5c8j1JPFLXRzFtdo3F8ll+Bt7K+S5aAF4yDvUcirdBqLzwrLDax3i7gxCEBx+VKHhMyMG+vtxVYu9XOmXRhaIq2TypIzXL2O7jyhjO0vk93av5skmlXAZlxkxdaquty2clq0cFgtvKUCDcBkevSlf8AxTuXDmUDGcb88VKswL7EwQhT3bkmtwpdXMinLdwhbpXhm2hDTODI+OpHSs3TQaZpjJCmJJvqx19qc6jejTbIsAAQMAetUae9aeZpG4Rc4z3puvda90ugUsR4RruZljtBHn96eSfU05sbARxW9ykybFTEanqW9MfrSfR4Td6j50kXmxxguy+oFWG3t7bUYoZImFvBbkGUMefXj1o9r28GY8keed5rqJprcQPbqAiJ8uWB6n2rwTuYserEk49akag0supSTSyCQMAIyOm3tWihrpFnnFB4Gazj3qNezCC3LE1tLLwim8CHWbjzJ9o6CioE8hllZj3NFd2uOyKQhJ5eTXVm8JmO4uTDPMsagcBjjcfSqzW+zuDa3SSgAhTkg1m6v1IOJcJbXk7xceRoOkQ6d8Gbq3vQHe5iJ2t7D+tVvXptmoG3RF/CFwsAA3GNyOn/AFVs0DxSjadI9zfGFrhTDbqvKxcdSO33qMLeOGS5s7Zd15YY+HkZsCV2PLYPf0rykK3XNqff5z/ro6jkpLgRSQT291LZCUXJVMMyniP16+lQLeKSO8Codm4cebxuFWG/gW5tTFcSG3urQM90VXKkk8Djq1RIYHmK3ssUSjZty7dFxjcR1J9BT0Z8AmuT1oss9urNbwjzTlDG/IcYOT/TFbI54I47af8ADmmFuP3pbK9+OR1xWiARwypGTPGrbgjKp+YHquD2/wB6I2RoZ7dLm4wOYY+QxPcY6VlrLbLRN8N+G4NS8aTfGKk1sIzcYAO3LHgEVF8S6Nc2F5Lb3UEUe05jMaBUdexFXn9nlmzaVJeSGV5JW2DzByAvGP71ZdX0W21rTjbXK5H8Dj6kPqP8UhPWOu7D6XAVVZifP8IMchRxj0r3aXJsNUjmJ3IGyc9MU/8AEHhm70S7EVyhMbH93Ov0v/g+1ILm2ZVOfXqBXXjONiyumLtNHV9K1K1vbWN/MUFhxk0v1jRrW8uJZCu4rhsj+tc+07UZIwItxHbNWaHXWc5Zj0HX071z5aaVcsxYZTUlhkmDw7ZQzBiSwJwobt3p7BFbWtkAuNq1VzrCxxb1UZHWlV/rk0ULqrkh+uat1WWPDZW5RMeK9T+KvxbRt8opDMAQI1455rxG7ySluSx6EitsymGHcQWYkZNdKEFBKKAN55HllHdQadbQQlC0znDL1x6E+lNVa1vXmspUFmQSzSAHBA/zUDTIJodPle2nVzNENkX8WSfSptu90sSQ7UuLJY9krAgMMckZ69aTny2FRBaSCWRpLdCkROAD7cZrFCnK5K7Aei+g7CjtWyjBwBVe1u73P5anpTXUbxbaA8/MaqkshlkLE9af0lWXvYvbPjCPFFFFdQWCiiioQn6ZqDWj7Cqup5AboD611LSLdr6ztL6Jfj3t1wIZCELSHq5Y9hwBXHqsXhrX20+5WORv3R4rm63TOyO6HYxTZteGdQHhe/jkg+FMEEEmJLmKUly75yecc1qg8D3sGqTXcd3ARI4YK+ScZ5HT0pppUdtqsCSQXMbccjac/wBqaroKsQRKnTj5W/xXl5Xzg2m/+HSUU+UVSXwJqlxcrL+IWwCsWCy5bBzxjA9KnWv7NmuXm33rNJKpJfzsLu9kAyR9zViTRrpABFP5gHZJDn9K2o9zb/U7Nj+CQZ//AChy1VjWIyLVcfKN2haSdK0m309kxLAoRlBznPfPv1pusPrUOHWDiOMDMjsBsc8n1we/2NOjGM5HSudZKWcy8h4pY4FF/pUF9bNDPCssT/UrDINcy8ReAp7Fmn00GaHqYTyy/wDT612bywV6VDubYMpBFE0+qnU+OjM61Ls+Z59OR5GMbbHXhkPGP8Vp23UDgE7SP5h/vXX/ABX4OttSJlVTDcDpKnDfn6/nXM9RtNS0Ntl9B58APEqjj8x2r01GpjcuO/YRnW4kBpZ2BZnTB7qM1q+DluZDktt9Wpla31nIuVKDHY8VlrpZ5lt7WPzZn4VIxkmj7mvBjBBFvHB8qqS/0jHUn0prqmhvp3hKS5uRieV0+X+UZ/vVw8OeERYqt5ehZbthkD+GP2Hv71o/aDFjwtOQMbXQ/wBaU/VKVsYR9wnp4i2ynWUtnJClxJLLbtEQihOQ3H9K9QNZCWJ1u5IHjJA4yJSO/tk/2qNb3SpZRW8Vt5uAZSH4Ibpn7UedONga2jm98f6XtTLjyweSchYoCx3MeSfU1ruZ1t4SxIonuI7aPLMOBxVY1HUWuZCAflotNLsf2Mzmoo031211MSTxUWiiuzGKisISbzyFFFFaIFFFFQgUdKKKhCweHPF+o+Hp828xCnsecV2Lw3+0R72CQLdIzFc//IP0N6jA5B9O1fPtSLW9ns5Q8MjIR6HFczWfDqtSs45GKr5V/wCD6ps9UWRlS9zMGXczmPYyehGOcH9RUgvaX0BaCTz4R1cAh0++eorhmg/tKmgHl3QLgKVUlyCuevPXBro/hrxVbTz2jxTBycgqZC3B6jJ968nqfh9tGW0dOu+Mzfq1s8Gp243b4kBkDr0p74U1c6lby28z5mgbjJ5ZT0/TpXjU7XdHd3tugkV1CNDng+49DVb0Emz1eOe0kLAPtkjYYdQeoI/96UvhW1P3QT6ZHSlXjFeXjyDW2M7hgjBHWvRAxXMyHE11ZhwRikF7oMdwrK8YZW4IIzmrjIgNK7q5jV/Ljwzd/ama7JLoHKK8nMtQ/ZLp95P5sDyWpJyUT6T/AIp3oXgqw0OBntbfE/8AGzncx/OrfGhA3MeayUBFNy1lso7ZS4BqqKeUhC8eBSrU7WK7iMMyB434KkU/uAhBkUgKSQfY1XdS1uw09908q/LzjNbq3SfyrkqWF2UzxB4SmsbSWbT18wSYHX5kGckCqQ04t8MJXXa2WBP1n1q0eIf2iNNvhsxhemaoNzcyXU7SyHLMcmvVaPT2uP8AeObbZHPym28vpLpySeKiUUV14xUVhCjeewooorRAoooqECiiioQKKKKhAoooqECpdnqd1Yyq8MrKR6GiiqcVJYZE8F20r9qmo2tqLe4PmJnJz3qx6b4/0m+voJrgGCWM5EicH/zRRXLv+H0NOSWH9hmF81xk6VpHjvTNRs1d5lEikjI6EZ4qwWt/DeQ+ZE2RRRXjdbpYUt7Tq1WOXYp1jWZVmFlZxmWT/wCwg/SPT71o3R2VqJrhSmRk5oooUYpbY+5pvti288aaVZx7nl49KrOp/ta062BWBd7DpRRXodJ8NonzLIjbqJro51fftG1KdrgRyEJMc49Kq13qd1euWmlZs+9FFekq09dX0LAhKcpdsiUUUUcwFFFFQgUUUVCBRRRUIf/Z";
const ADEL_PHOTO = "data:image/jpeg;base64,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";

// ═══ DATA ═══
const BOOSTERS = [
  { id:'discipline', num:1, name:'الانضباط', tagline:'الجسر بين المعرفة والتطبيق', equation:'ذكاء + انضباط = إنجاز ملموس', description:'تحويل المعرفة إلى فعل ملموس ومستمر والالتزام بالعادات.', color:'#FBBF24', Icon:Target,
    concept:'الذكي يرى المشكلة بوضوح، لكن بدون انضباط تبقى المشكلة في مكانها ويبقى هو في مكانه.',
    without:'ترى المشكلة بوضوح، لكنك تبقى في مكانك. الجاهل لا يعرف، لكنك تعرف وتؤجل — وهذا أصعب.',
    with:'تحويل الفهم النظري إلى إنجاز فعلي على أرض الواقع.',
    practical:'قاعدة العشر دقائق: اختر مهمة تؤجلها، نفّذها 10-20 دقيقة يومياً لـ7 أيام دون انتظار للحماس.',
    science:'دراسة دنيدن (نيوزيلندا): تتبّعت 1000 طفل لـ32 سنة، ووجدت أن ضبط النفس يتنبأ بالنجاح أكثر من نسبة الذكاء IQ.',
    quote:'الذكاء يحب الخطط الكبيرة، لكن الانضباط يبدأ من الأفعال الصغيرة.',
    questions:['هل أُطبّق ما أعرفه فعلياً، أم أكتفي بمتعة المعرفة؟','هل أتلزم بالعمل عندما يختفي حماس البدايات؟','هل أبدأ بالأفعال الصغيرة بدلاً من انتظار الخطة المثالية؟'],
    sources:[{type:'دراسة',title:'Dunedin Study',url:'https://dunedinstudy.otago.ac.nz/'},{type:'كتاب',title:'Atomic Habits — James Clear',url:'https://jamesclear.com/atomic-habits'}]
  },
  { id:'execution', num:2, name:'التنفيذ والتدريب', tagline:'الفهم ليس مهارة', equation:'ذكاء + تدريب = مهارة احترافية', description:'تحويل الفهم النظري السريع إلى مهارة وقدرة حقيقية من خلال الممارسة.', color:'#10B981', Icon:Dumbbell,
    concept:'الذكي يفهم الفكرة بسرعة فيشعر أنه امتلكها. لكن الفهم نقطة بداية، والتدريب يصنع النتيجة.',
    without:'تراكم معرفي بلا قدرة على الأداء — تعرف الكثير وتُنجز القليل.',
    with:'إتقان مهارات قابلة للقياس والاعتماد عليها.',
    practical:'قاعدة 20×30: تدرّب على مهارة 20 دقيقة يومياً لـ30 يوماً، عبر دورة: تعلّم → تطبيق → تقييم → استشارة → تصحيح → تكرار.',
    science:'منهجية الممارسة المقصودة لأندرس إريكسون: التكرار العادي لا يصنع خبيراً، التكرار المُصحَّح هو الذي يصنع.',
    quote:'في فرق بين أن تفهم الإلقاء وأن تقف أمام جمهور وتتكلم بثقة.',
    questions:['هل أُمارس المهارة كل يوم، أم أكتفي بقراءة عنها؟','هل أطلب تغذية راجعة من أشخاص أفضل مني؟','هل أتتبع تطوري بمقاييس واضحة؟'],
    sources:[{type:'كتاب',title:'Peak — Anders Ericsson',url:'https://www.goodreads.com/book/show/26312997'}]
  },
  { id:'communication', num:3, name:'التواصل', tagline:'جسر عبور أفكارك للعالم', equation:'ذكاء + تواصل = تأثير واسع', description:'القدرة على شرح الأفكار بوضوح وإقناع الآخرين.', color:'#06B6D4', Icon:MessageCircle,
    concept:'قد يكون عندك أفضل فكرة، لكن إذا ما عرفت تشرحها بطريقة لا تُرفض، ستجلس تأخذ رأسك وما حد بيشوفها.',
    without:'الناس لا ترفض فكرتك الجيدة، بل ترفض أسلوب صاحب الفكرة.',
    with:'جودة فكرتك لا تُغني عن جودة عرضها — التأثير يبدأ من اختيار الأسلوب.',
    practical:'صيغة الإقناع: فكرة واحدة + مثال واحد + طلب واضح. ثلاثة عناصر، لا أكثر.',
    science:'تقرير LinkedIn 2024: التواصل في المرتبة الأولى عالمياً بين أكثر المهارات طلباً، متفوقاً على القيادة.',
    quote:'الذكاء يخليك تشوف، لكن التواصل يخلي غيرك يشوف.',
    questions:['هل يفهمني الآخرون من المرة الأولى؟','هل أُصغي لأفهم، أم لأرد؟','هل أعدّل أسلوبي حسب من أحدّث؟'],
    sources:[{type:'تقرير',title:'LinkedIn Most In-Demand Skills 2024',url:'https://www.linkedin.com/'}]
  },
  { id:'humility', num:4, name:'التواضع المعرفي', tagline:'حماية العقل من فخ الغرور', equation:'ذكاء + تواضع = تعلم مستمر', description:'الاعتراف بعدم المعرفة والانفتاح على آراء الآخرين.', color:'#8B5CF6', Icon:BookOpen,
    concept:'الذكي يتعود أن إجاباته صحيحة، فيصعب عليه قول "لا أعرف". لكن "لا أعرف" بداية معرفة جديدة.',
    without:'تتحجّر عقلياً، وذكاؤك يصبح أرشيفاً قديماً تجاوزه الزمن.',
    with:'نمو مستمر — كل نقد فرصة، وكل خطأ درس، وكل سؤال بوّابة.',
    practical:'قاعدة "لا أعرف": مرة يومياً اعترف صراحة بأمر تجهله أمام شخص آخر.',
    science:'تأثير Dunning-Kruger: الأقل خبرة هم الأكثر ثقة. الخبراء الحقيقيون يدركون حدود معرفتهم.',
    quote:'قول "لا أعرف" لا يقلل من ذكائك، بل يكبرك في عيون الناس.',
    questions:['هل أتقبّل النقد بهدوء، أم أتدافع؟','هل أُغيّر رأيي عند ظهور دليل جديد؟','هل أعترف بأخطائي علناً؟'],
    sources:[{type:'كتاب',title:'Think Again — Adam Grant',url:'https://adamgrant.net/book/think-again/'}]
  },
  { id:'emotional', num:5, name:'الذكاء العاطفي والاجتماعي', tagline:'العلاقات لا تُدار كمسائل رياضية', equation:'ذكاء + ذكاء اجتماعي = علاقات قوية', description:'فهم مشاعر الناس واختيار الوقت والأسلوب المناسب.', color:'#EF4444', Icon:Heart,
    concept:'الذكي قد يعرف الرد المناسب لكنه لا يعرف الوقت المناسب. يكسب النقاش لكنه يخسر العلاقة.',
    without:'ذكاء بارد بلا تأثير — تكون على حق دائماً، ووحيداً دائماً.',
    with:'علاقات عميقة وقدرة على التأثير في الناس والمواقف الصعبة.',
    practical:'قاعدة الست ثوانٍ: قبل أي رد عاطفي، توقف 6 ثوانٍ واسأل "ماذا يشعر هذا الشخص الآن؟"',
    science:'دانيال غولمان (1995): الذكاء العاطفي يفسّر 67% من الأداء القيادي المتميّز، بينما IQ وحده أقل من 30%.',
    quote:'اكسب القلوب قبل أن تكسب النقاشات.',
    questions:['هل أُلاحظ مشاعر من حولي قبل أن يعبّروا عنها؟','هل أتحكم في رد فعلي عند الغضب؟','هل أختار الوقت المناسب للحديث في الأمور الحساسة؟'],
    sources:[{type:'كتاب',title:'Emotional Intelligence — Daniel Goleman',url:'https://www.danielgoleman.info/'}]
  },
  { id:'flexibility', num:6, name:'المرونة والتعلم المستمر', tagline:'الذكاء الذي لا يتجدد يصبح أرشيفاً', equation:'ذكاء + مرونة = مواكبة وتطور', description:'تحديث المعرفة والمهارات باستمرار.', color:'#F97316', Icon:RefreshCw,
    concept:'العالم لا ينتظر من يقول "أنا كنت أعرف". العالم يكافئ من يقول "أنا الآن أتعلم".',
    without:'تتقادم بسرعة، وما كان يعمل بالأمس يصبح عبئاً اليوم.',
    with:'تتجدد كل سنة، وتبقى ذا قيمة في عالم يتغير كل ساعة.',
    practical:'قاعدة الـ 5%: خصّص 5% من وقتك أسبوعياً لتعلم شيء خارج تخصصك.',
    science:'كارول دويك (Stanford): العقلية النامية ترفع التحصيل بنسبة تصل إلى 30%.',
    quote:'الذكاء اليوم ليس فيما تعرفه، بل في قدرتك على تعلّم ما ستحتاجه غداً.',
    questions:['متى آخر مرة غيّرت رأيي في موضوع مهم؟','هل أتعلم مهارة جديدة هذا الشهر؟','هل أُجرّب طرقاً مختلفة لحل نفس المشكلة؟'],
    sources:[{type:'كتاب',title:'Mindset — Carol Dweck',url:'https://www.mindsetworks.com/'}]
  },
  { id:'financial', num:7, name:'الحكمة المالية', tagline:'الذكاء يجلب الدخل، السلوك يبني الثروة', equation:'ذكاء + إدارة مال = استقرار وثروة', description:'إدارة المال بحكمة وانضباط.', color:'#14B8A6', Icon:Wallet,
    concept:'الذكاء قد يرفع دخلك، لكنه لا يضمن بناء ثروتك. كم شخص دخله ممتاز ومضغوط مالياً.',
    without:'دخل كبير وخوف دائم — تعمل أكثر وتدّخر أقل.',
    with:'هدوء مالي — حرية الاختيار وعدم القلق من الغد.',
    practical:'قاعدة 50/30/20: 50% احتياجات، 30% رغبات، 20% ادخار. وقاعدة الـ30 يوماً: صنّف كل مصروف ضروري/مريح/استعراضي.',
    science:'دراسة الثروات (2018): IQ يرفع الدخل لكن لا يرتبط ببناء الثروة. الفرق في السلوك لا الذكاء.',
    quote:'إن لم تحكم الـ100 ريال، لن تحكم المليون. العبرة في عضلة الإدارة، لا في حجم المبلغ.',
    questions:['هل أعرف بالضبط أين يذهب راتبي شهرياً؟','هل لدي صندوق طوارئ يكفي 6 أشهر؟','هل أستثمر شيئاً من دخلي الشهري؟'],
    sources:[{type:'كتاب',title:'The Psychology of Money — Morgan Housel',url:'https://www.morganhousel.com/'}]
  },
  { id:'trust', num:8, name:'الموثوقية', tagline:'من شخص مُلفت إلى شخص مطلوب', equation:'ذكاء + موثوقية = ثقة وشراكات', description:'الالتزام بالوعود والمواعيد وحفظ الأسرار.', color:'#A78BFA', Icon:ShieldCheck,
    concept:'الذكاء يجعلك مُلفتاً، لكن الموثوقية تجعلك مطلوباً. الناس لا تسأل "هل هو ذكي؟" بل "هل يمكنني الاعتماد عليه؟"',
    without:'مهما كنت ذكياً، لن يستثمر فيك أحد إذا لم يثق بك.',
    with:'فرص تأتيك دون أن تطلبها، وأبواب تُفتح قبل أن تطرقها.',
    practical:'قاعدة الـ24 ساعة: إذا تأخرت عن وعد، أبلغ قبل الموعد لا بعده.',
    science:'Edelman Trust Barometer: الثقة هي العملة الأقوى في القرن 21، تتفوّق على المهارة في قرارات التوظيف والشراكة.',
    quote:'الذكاء يجعلك نجم الغرفة للحظات، لكن الموثوقية تجعلك الخيار الأول دائماً.',
    questions:['هل أفي بوعودي حتى الصغيرة منها؟','هل أصل في الموعد دائماً، أم أعتذر دائماً؟','هل يأمنني الناس على أسرارهم؟'],
    sources:[{type:'كتاب',title:'The Speed of Trust — Stephen Covey',url:'https://www.franklincovey.com/the-speed-of-trust/'}]
  },
  { id:'relationships', num:9, name:'العلاقات', tagline:'جودة حياتك من جودة شبكتك', equation:'ذكاء + علاقات = سند وفرص', description:'بناء علاقات آمنة وداعمة.', color:'#EC4899', Icon:Users,
    concept:'النجاح الفردي المطلق وهم. الإنسان لا يعيش بعقله فقط — يحتاج سنداً، أناساً يثق بهم ويثقون به.',
    without:'وحدة في القمم وفي الوديان — لا أحد يدفعك ولا أحد يُمسك بك.',
    with:'دعم في الأزمات وفرص في الرخاء — وعمر يطول لأن العزلة تقتل.',
    practical:'قاعدة 5×5: تواصل مع 5 أشخاص مهمين كل أسبوع، ولو برسالة قصيرة.',
    science:'دراسة هارفارد للنمو البالغ (75+ سنة): جودة العلاقات أقوى متنبئ بالسعادة وطول العمر.',
    quote:'يرى الناس مجرد عقول ونتائج، سيخسر القلوب — والقلوب هي أبواب الفرص.',
    questions:['هل أستثمر وقتاً منتظماً في علاقاتي المقربة؟','هل أبادر بالتواصل، أم أنتظر دائماً؟','هل في حياتي أشخاص يدفعونني للأعلى؟'],
    sources:[{type:'دراسة',title:'Harvard Study of Adult Development',url:'https://www.adultdevelopmentstudy.org/'}]
  }
];

const ANSWER_OPTIONS = [
  { emoji:'🌟', label:'دائماً', score:10 },
  { emoji:'😊', label:'غالباً', score:7 },
  { emoji:'😐', label:'أحياناً', score:5 },
  { emoji:'🙁', label:'نادراً', score:3 },
  { emoji:'😔', label:'أبداً', score:1 }
];

const PERSON_TYPES = [
  { id:'spouse', label:'الزوج / الزوجة', sub:'قيّم شريك حياتك', Icon:Heart, color:'#EC4899' },
  { id:'children', label:'الأبناء', sub:'اكتشف مواهب أبنائك', Icon:Users, color:'#10B981' },
  { id:'friend', label:'الأصدقاء', sub:'افهم معززات صديقك', Icon:User, color:'#06B6D4' },
  { id:'colleague', label:'الموظف / الزميل', sub:'فهم ديناميكية فريقك', Icon:Briefcase, color:'#F59E0B' },
  { id:'family', label:'أحد أفراد العائلة', sub:'قريب تريد دعمه', Icon:Heart, color:'#8B5CF6' },
  { id:'other', label:'شخص آخر', sub:'أي شخص في حياتك', Icon:User, color:'#FBBF24' }
];

const AGE_RANGES = [
  { id:'teen', label:'تحت 18', sub:'مرحلة التشكّل', Icon:Sparkles },
  { id:'young', label:'18-25', sub:'بداية المسيرة', Icon:Rocket },
  { id:'mid', label:'26-35', sub:'البناء والتأسيس', Icon:TrendingUp },
  { id:'mature', label:'36-50', sub:'النضج والقيادة', Icon:Award },
  { id:'senior', label:'50+', sub:'الحكمة والإرث', Icon:Star }
];

const LIFE_STAGES = [
  { id:'student', label:'طالب', Icon:GraduationCap },
  { id:'employee', label:'موظف', Icon:Briefcase },
  { id:'business', label:'صاحب عمل', Icon:Building2 },
  { id:'parent', label:'أب / أم', Icon:Home },
  { id:'searching', label:'بحث وتغيير', Icon:Eye }
];

const CHALLENGES = [
  {id:'family', label:'ضغط أسري'}, {id:'social', label:'رهاب اجتماعي'},
  {id:'work', label:'ضغط عمل'}, {id:'money', label:'تحديات مالية'},
  {id:'change', label:'مرحلة تغيير'}, {id:'isolation', label:'شعور بالعزلة'}
];

const SCENARIOS = {
  discipline: [
    { ctx:'الأسرة', situation:'وعدت أبناءك بنشاط أسبوعي ثابت، ومع الإرهاق تأجل أسبوعاً بعد آخر.', struggle:'الحماس الأول تلاشى، وتشعر بالذنب لكن لا تتحرك.', approach:'طبّق قاعدة العشر دقائق: 10 دقائق فقط معهم بنشاط بسيط — صلابة الموعد أهم من فخامة المحتوى.' },
    { ctx:'العمل', situation:'مشروع مهم بمواعيد ضيقة، تجد نفسك تتصفح الجوال بدلاً من البدء.', struggle:'تعرف العواقب، لكنك تنتظر "اللحظة المناسبة" التي لا تأتي.', approach:'افتح الملف وادخل في المهمة 15 دقيقة فقط، حتى لو ستكتب جملة واحدة. الفعل يولّد الإلهام، لا العكس.' },
    { ctx:'الاجتماعي', situation:'تعرف أنك بحاجة لتغيير عاداتك الصحية لكنك تؤجل من شهر لشهر.', struggle:'"بداية الشهر القادم" أصبحت لازمتك المزمنة.', approach:'لا تنتظر بداية الشهر. ابدأ اليوم بـ 10 دقائق مشي. الانضباط يكره الكمال ويحب الاستمرار.' }
  ],
  execution: [
    { ctx:'الأسرة', situation:'قرأت عن أساليب تربوية حديثة، وتشرح لزوجتك بحماس، لكن في المواقف الفعلية تعود لأسلوبك القديم.', struggle:'الفهم لا يتحول إلى سلوك جديد تحت ضغط اللحظة.', approach:'اختر أسلوباً واحداً، طبّقه في موقف واحد محدد يومياً، وراجع نفسك مساءً. التدريب يبني العضلة الجديدة.' },
    { ctx:'العمل', situation:'حضرت دورة باهظة في مهارة تحتاجها، وانتهت بشهادة لكن دون تغيير ملموس في أدائك.', struggle:'الشهادة في الجدار، والمهارة لم تنتقل إلى يديك.', approach:'خصّص 20 دقيقة يومياً لـ30 يوماً للتطبيق فقط، واطلب من زميل تقييمك أسبوعياً. الشهادة ميتة بدون ممارسة.' },
    { ctx:'الاجتماعي', situation:'تعرف أن لياقتك سيئة وتفهم كل المعلومات الرياضية، لكنك لم تنزل لصالة منذ سنة.', struggle:'الفهم في رأسك، والجسد لم يتحرك.', approach:'لا تخطط لـ60 دقيقة مثالية. ابدأ بـ20 دقيقة كل يوم، حتى لو في البيت. التدريب يبني الجسد، والمعرفة لا تبنيه.' }
  ],
  communication: [
    { ctx:'الأسرة', situation:'خلاف مع شريك حياتك حول قرار مهم. أنت محق منطقياً، لكن النقاش انقلب لمعركة.', struggle:'انتصرت بالحجة لكنك خسرت الجو العائلي لأسبوع.', approach:'استبدل "أنت غلط لأن..." بـ"الفكرة جميلة، وأرى فرصة للتحسين..."، ثم قدّم مثالاً وطلباً واضحاً. الحقيقة بأسلوب جارح تُرفض.' },
    { ctx:'العمل', situation:'في اجتماع، رأيك ممتاز لكن قدّمته بانفعال "الخطة غلط واضح أنكم ما حسبتوها".', struggle:'فريقك دافع عن نفسه ضدك بدلاً من سماعك.', approach:'الصيغة الذهبية: "أرى الخطة كويسة، وفيها فرصة للتحسين، خلونا نراجع 3 نقاط". تصنع تعاوناً لا مقاومة.' },
    { ctx:'الاجتماعي', situation:'تكلمت في مجموعة عن موضوع تتقنه، وفهموا عكس ما قصدت.', struggle:'الفكرة في رأسك مكتملة، لكن العرض كان مشوّشاً.', approach:'قبل أي طرح، اختصر فكرتك في جملة واحدة، أعطِ مثالاً واقعياً، حدد طلباً ملموساً. غموضك يُسبّب رفضهم لا فكرتك.' }
  ],
  humility: [
    { ctx:'الأسرة', situation:'ابنك المراهق صحّح لك معلومة قلتها بثقة، أمام بقية العائلة.', struggle:'كبرياؤك يأبى الاعتراف، فدافعت عن نفسك بحجة ضعيفة.', approach:'قل بصدق: "صح، أنت محق، شكراً". هذه اللحظة تعلّمه الصدق وتُكبر مكانتك عنده 10 مرات. المكابرة تصنع جدراناً.' },
    { ctx:'العمل', situation:'زميل أصغر منك سناً قدّم نقداً بنّاءً لمشروعك في اجتماع.', struggle:'شعرت بالإحراج وبدأت تشرح وتبرر بدلاً من الاستماع.', approach:'قل: "ملاحظة قيّمة، خلني أراجعها وأرجع لك". هذه الكلمات يقولها الكبار. الذكي يتعلم من أي مصدر.' },
    { ctx:'الاجتماعي', situation:'صديق نبّهك إلى عيب في تصرفك مع أحد المقربين.', struggle:'سمعت الكلام وكأنه هجوم، لا كأنه هدية.', approach:'النقد البنّاء أغلى من المديح. اشكره، فكّر فيه يومين، وارجع له بإجابة. التواضع يبني الثقة الحقيقية.' }
  ],
  emotional: [
    { ctx:'الأسرة', situation:'زوجتك عادت متعبة من العمل، وأنت مباشرة بدأت تشكو من يومك.', struggle:'لاحظت تعبها لكن استعجلت بالتعبير عن نفسك.', approach:'اقرأ المشهد قبل التكلم. اسألها أولاً: "كيف يومك؟ تبغين تتكلمين أو ترتاحين؟". التعاطف لا يُكلّف، لكن غيابه يكلّف العلاقة.' },
    { ctx:'العمل', situation:'مديرك انتقدك أمام الفريق، فقدت السيطرة ورديت بحدّة.', struggle:'الكرامة دفعتك للرد، لكن الموقف انقلب ضدك.', approach:'قاعدة الست ثوانٍ: اصمت، تنفّس، ثم قل "نقطة مهمة، خلنا نناقشها بعد الاجتماع". الذكاء العاطفي يربح طويل الأمد.' },
    { ctx:'الاجتماعي', situation:'صديق يمر بأزمة مالية، وأنت محرج لا تعرف كيف تتصرف معه.', struggle:'صمتك أصبح ثقيلاً وقلة كلامك يفسرها كنفور.', approach:'لا يحتاج حلولاً، يحتاج فقط حضوراً. اتصل بدون مقدمات: "في خاطري، تبغى نتقهوى؟" البشر يحتاجون أن يُرَوا، لا أن يُحَلّوا.' }
  ],
  flexibility: [
    { ctx:'الأسرة', situation:'أبناؤك يستخدمون تطبيقات وألعاباً لا تفهمها، وتشعر أنك بعيد عن عالمهم.', struggle:'قرّرت أنها "أمور صبيانية" بدلاً من تعلّمها.', approach:'خصّص ساعة أسبوعياً ليعلّموك أنت تطبيقاً واحداً. القرب يُبنى من فضول، لا من فوقية.' },
    { ctx:'العمل', situation:'شركتك تبنّت أدوات ذكاء اصطناعي، وأنت ترفض تعلّمها متمسكاً بأسلوبك القديم.', struggle:'تخاف من الظهور كمبتدئ بعد سنوات خبرة.', approach:'الخبرة الحقيقية هي القدرة على إعادة التعلّم. ساعتان أسبوعياً مع AI ستضاعف إنتاجيتك. المتمسك بالأمس يُستبدل غداً.' },
    { ctx:'الاجتماعي', situation:'تجد نفسك في حوارات لا تواكبها — مصطلحات جديدة، توجهات غريبة.', struggle:'تنسحب بدلاً من السؤال "علمني".', approach:'اقتنِ موقعاً أو حساباً واحداً يلخص لك التحولات أسبوعياً. الفضول هو شباب الروح.' }
  ],
  financial: [
    { ctx:'الأسرة', situation:'الأهل يضغطون لشراء سيارة جديدة "تليق بمستواك"، وأنت لم تخطّط لها.', struggle:'الضغط الاجتماعي أقوى من الميزانية.', approach:'قاعدة الـ30 يوماً: لا تشترِ شيئاً غير ضروري قبل 30 يوماً تفكير. وضّح للأهل بهدوء: "حاضر أراجع". أكثر الديون مصدرها استعراض لا حاجة.' },
    { ctx:'العمل', situation:'زملاؤك يصرفون على غداء فاخر يومياً، وتشعر بالحرج من إحضار طعامك.', struggle:'الانسجام الاجتماعي يكلّفك آلاف شهرياً.', approach:'انضم مرة أسبوعياً وكفى. الفرق المالي مع الوقت = صندوق طوارئ كامل. استقلاليتك المالية أهم من انطباعهم.' },
    { ctx:'الاجتماعي', situation:'مناسبات اجتماعية متتالية (أعراس، هدايا، سفر) تستنزف ميزانيتك.', struggle:'الإحراج لا يسمح لك بالاعتذار.', approach:'خصّص بنداً ثابتاً 5-10% من دخلك للمناسبات. حين ينفد، اعتذر بصدق دون تبرير. الاحترام لا يحتاج استعراضاً.' }
  ],
  trust: [
    { ctx:'الأسرة', situation:'وعدت ابنك برحلة هذا الأسبوع، ومع ضغط العمل تنوي تأجيلها.', struggle:'تظن أنه "صغير وسينسى".', approach:'الأطفال لا ينسون. اتصل قبل الموعد بيومين، اشرح بصدق، اقترح بديلاً قريباً ثم نفّذه. ثقة طفلك بك تتشكل في هذه اللحظات.' },
    { ctx:'العمل', situation:'تأخرت على تسليم مشروع، وفكرت أن تختفي وتعتذر بعد الـdeadline.', struggle:'الإحراج يدفعك للهرب من المواجهة.', approach:'الموثوقية ليست في عدم الخطأ، بل في الإبلاغ المبكر. أرسل قبل الموعد: "متأخر يومين، هذه الأسباب، هذا الحل". صدقك يبني سمعتك.' },
    { ctx:'الاجتماعي', situation:'صديق ائتمنك على سرّ، ومحادثة جاءت تفتح الباب لذكره.', struggle:'الإغراء بمشاركة "خبر" مُغرٍ، لكن الثقة هشّة.', approach:'إذا كنت تظن "هي مجرد تلميحة"، فالأمانة كلها أو لا شيء. حفظ السر مرة واحدة يجلب لك أسراراً تفتح أبواب فرص لسنوات.' }
  ],
  relationships: [
    { ctx:'الأسرة', situation:'لا تتكلم مع والدتك إلا في المناسبات الرسمية، وتشعر أن العلاقة باردة.', struggle:'"الحياة مشغولة" تبرير يخفي تقصيراً يومياً.', approach:'مكالمة واحدة 5 دقائق يومياً، حتى لو "كيف صحتك؟". الاستمرارية تبني الدفء، لا الزيارات الموسمية الطويلة.' },
    { ctx:'العمل', situation:'زملاؤك يجتمعون اجتماعياً وأنت دائماً تعتذر. تشعر بالعزلة لكن لا تعرف كيف تكسرها.', struggle:'الانشغال + الرهاب = جدار يطول.', approach:'احضر مرة واحدة كل أسبوعين فقط، وانسحب مبكراً إذا لزم. الحضور الجزئي خير من الغياب التام. العلاقات المهنية تُبنى لا تُولد.' },
    { ctx:'الاجتماعي', situation:'كل أصدقائك ساعدوك في وقت ما، لكنك لم تبادر بمساعدة أحد منذ زمن.', struggle:'الذاكرة قصيرة لما حصلت عليه.', approach:'هذا الأسبوع: تواصل مع 3 أصدقاء واسأل "كيف أقدر أساعدك؟" — ليس استجداءً، بل بنية صادقة. العلاقات تنزف بدون تجديد.' }
  ]
};

const BADGES_LIST = [
  { id:'first', name:'الخطوة الأولى', sub:'أتممت تقييمك الأول', Icon:Rocket, ok:s=>s.assessmentsCount>=1 },
  { id:'persist', name:'المثابر', sub:'3 تقييمات', Icon:RefreshCw, ok:s=>s.assessmentsCount>=3 },
  { id:'analyst', name:'المحلّل', sub:'5 تقييمات', Icon:BarChart3, ok:s=>s.assessmentsCount>=5 },
  { id:'track', name:'في الطريق', sub:'>50 نقطة', Icon:TrendingUp, ok:s=>s.maxScore>=50 },
  { id:'distinguished', name:'متميّز', sub:'>70 نقطة', Icon:Star, ok:s=>s.maxScore>=70 },
  { id:'pro', name:'محترف', sub:'>80 نقطة', Icon:Trophy, ok:s=>s.maxScore>=80 },
  { id:'lover', name:'عاشق المعزز', sub:'10/10 في معزز', Icon:Heart, ok:s=>s.maxBoosterScore>=10 },
  { id:'transform', name:'التحوّل', sub:'+10 نقاط نمو', Icon:Zap, ok:s=>s.improvement>=10 },
  { id:'planner', name:'المخطّط', sub:'ولّدت خطة', Icon:ClipboardList, ok:s=>s.hasPlan },
  { id:'mentor', name:'المرشد', sub:'قيّمت شخصاً', Icon:Users, ok:s=>s.othersAssessed>=1 },
  { id:'curious', name:'الفضولي', sub:'5 أسئلة للمدرّب', Icon:HelpCircle, ok:s=>s.coachQuestions>=5 },
  { id:'explorer', name:'المستكشف', sub:'استكشفت كل المعززات', Icon:Map, ok:s=>s.boostersExplored>=9 }
];

// ═══ AI ═══
async function callClaude(prompt, max=1500) {
  try {
    const r = await fetch("/api/claude", {
      method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ prompt, max_tokens:max })
    });
    if (!r.ok) throw new Error('API');
    const d = await r.json();
    return d.text || '';
  } catch (e) { console.error('AI:', e); throw e; }
}

function ctxBlurb(ctx) {
  if (!ctx) return '';
  const age = AGE_RANGES.find(a => a.id === ctx.age)?.label;
  const stage = LIFE_STAGES.find(s => s.id === ctx.stage)?.label;
  const ch = ctx.challenges?.map(c => CHALLENGES.find(x => x.id === c)?.label).filter(Boolean).join('، ');
  return `سياق: العمر ${age||'-'}، المرحلة: ${stage||'-'}${ch?'، تحديات: '+ch:''}.`;
}

const aiAnalyze = (scores, ctx) => callClaude(
  `أنت مدرّب منهجية المعززات التسعة. ${ctxBlurb(ctx)}\n\nنتائج: ${Object.entries(scores).map(([id,s])=>`${BOOSTERS.find(x=>x.id===id).name}: ${s}/10`).join('\n')}\n\nاكتب تحليلاً عميقاً (300-400 كلمة) بـMarkdown:\n1.**الصورة العامة:** ملاحظة لافتة عن النمط\n2.**نقطة القوة:** المحرّك الحقيقي\n3.**الفجوة الحرجة:** الأولوية الآن\n4.**الربط الذكي:** علاقة بين معززين تكشف نمطاً سلوكياً\n5.**توصية محددة:** خطوة واحدة لهذا الأسبوع تناسب عمره ومرحلته.\n\nبالعربية الفصحى، نبرة صديق صريح. استخدم ** للعناوين.`, 2000);

const aiPlan = (scores, ctx) => {
  const sorted = Object.entries(scores).sort((a,b)=>a[1]-b[1]);
  const weak = sorted.slice(0,3).map(([id])=>BOOSTERS.find(x=>x.id===id));
  return callClaude(`صمّم خطة 30 يوماً لأضعف 3 معززات:\n${weak.map((b,i)=>`${i+1}. ${b.name} (${scores[b.id]}/10)`).join('\n')}\n${ctxBlurb(ctx)}\n\nبـMarkdown: قسم لكل أسبوع (4 أسابيع)، لكل أسبوع هدف+جملة تحفيزية+7 مهام يومية محددة (10-30 دقيقة) مرتبطة بسياقه. ابدأ بالأسهل وارتقِ. ## للأسابيع، **اليوم X:** للمهام.`, 3000);
};

const aiLib = (boosterId, score, ctx) => {
  const b = BOOSTERS.find(x=>x.id===boosterId);
  return callClaude(`معزز "${b.name}" — حقق ${score}/10. ${ctxBlurb(ctx)}\n\nاقترح بـMarkdown:\n\n## 📖 مقالات مقترحة\n3 مقالات عربية. لكل مقال: عنوان + سطر وصف + رابط بحث Google بصيغة [ابحث عن المقال](https://www.google.com/search?q=...) — استبدل ... بكلمات بحث محددة بالعربية.\n\n## 🎬 مقاطع يوتيوب\n3 مقاطع. لكل واحد: عنوان + وصف + رابط بحث YouTube بصيغة [شاهد على YouTube](https://www.youtube.com/results?search_query=...).\n\n## 🎵 مقاطع تيك توك\n3 مقاطع قصيرة. لكل واحد: عنوان جذاب + وصف موجز + رابط بحث TikTok بصيغة [شاهد على TikTok](https://www.tiktok.com/search?q=...) — كلمات البحث مختصرة (٢-٤ كلمات) ومناسبة لمحتوى قصير.\n\n## 📚 كتاب موصى به\nعنوان عربي/مترجم + وصف + رابط: [اقرأ المزيد](https://www.google.com/search?q=...).\n\n## ⚡ تمرين 7 أيام\n7 تمارين يومية مرتبطة بالمعزز.\n\nاجعل العناوين واقعية ومحددة، لا فضفاضة. كلمات البحث بالعربية الفصحى ومختصرة.`, 2200);
};

const aiCoach = (q, scores, hist, ctx) => {
  const sc = scores ? Object.entries(scores).map(([id,s])=>`${BOOSTERS.find(x=>x.id===id).name}: ${s}/10`).join('\n') : 'لم يُتم تقييماً';
  const h = hist.slice(-4).map(m=>`${m.role==='user'?'م':'مرشد'}: ${m.content}`).join('\n');
  return callClaude(`أنت مرشد محرك الذكاء. ${ctxBlurb(ctx)}\nنتائجه: ${sc}\nآخر تبادل: ${h}\nسؤاله: ${q}\nأجب بإيجاز (3-5 جمل)، مباشر شخصي مستند لنتائجه. لا مقدمات.`, 700);
};

const aiExplain = (topic, deeper=false) =>
  callClaude(`اشرح "${topic}" بالعربية الفصحى ${deeper?'بعمق (300 كلمة)':'بإيجاز (150 كلمة)'} مع مثال عملي. Markdown.`, deeper?1500:800);

const aiScenario = (boosterId, scenarioCtx, situation) => {
  const b = BOOSTERS.find(x=>x.id===boosterId);
  return callClaude(`معزز: ${b.name}. سياق: ${scenarioCtx}.\nموقف المستخدم: "${situation}"\n\nأعطه نصيحة عملية مخصصة (150-200 كلمة) بـMarkdown:\n- فهم لمأزقه دون حكم\n- 3 خطوات صغيرة يبدأ بها اليوم\n- جملة تحفيزية مرتبطة بمنهجية المعززات\nاكتب بدفء وصدق، كصديق حكيم.`, 1000);
};

const aiOthersAdvice = (personType, scores, name, ctx) => {
  const pt = PERSON_TYPES.find(p=>p.id===personType);
  const sorted = Object.entries(scores).sort((a,b)=>a[1]-b[1]).slice(0,3);
  const weak = sorted.map(([id,s])=>`${BOOSTERS.find(x=>x.id===id).name}: ${s}/10`).join('، ');
  const top = Object.entries(scores).sort((a,b)=>b[1]-a[1]).slice(0,2).map(([id,s])=>`${BOOSTERS.find(x=>x.id===id).name}: ${s}/10`).join('، ');
  return callClaude(`أنت مرشد عائلي/مهني حكيم. صاحبنا قيّم ${pt.label} ${name?`(${name})`:''} على المعززات التسعة.\n${ctxBlurb(ctx)}\nأقوى نقطتين: ${top}\nأضعف 3: ${weak}\n\nاكتب نصيحة عملية (300-400 كلمة) بـMarkdown:\n1. **الصورة العامة:** ما الذي تكشفه نتائجه؟\n2. **كيف تساعده دون استفزاز:** 3 سلوكيات منك تخلق بيئة آمنة لتطوره\n3. **محادثة محتملة:** اقتراح كلمات افتتاحية لحديث صادق\n4. **خطأ شائع لا تقع فيه:** نمط يدمّر العلاقة بدلاً من بنائها\n5. **نقطة قوته:** كيف تستثمرها لتحفيزه على معالجة ضعفه\n\nنبرة دافئة لا توعظية. أنت تساعده لا تحكم عليه.`, 2000);
};

// ═══ UI HELPERS ═══
// TikTok icon — custom SVG (not in lucide-react default set)
const TikTokIcon = ({size=12}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.84a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1.84-.24z"/>
  </svg>
);

// Detect link type from URL and return appropriate icon + color
function getLinkMeta(url) {
  const u = url.toLowerCase();
  if (u.includes('youtube.com') || u.includes('youtu.be')) {
    return {icon:Youtube, color:'#FF0000', label:'YouTube'};
  }
  if (u.includes('tiktok.com')) {
    return {icon:TikTokIcon, color:'#FE2C55', label:'TikTok'};
  }
  if (u.includes('goodreads.com') || u.includes('books.google')) {
    return {icon:BookOpen, color:'#8B5CF6', label:'Books'};
  }
  if (u.includes('google.com/search') || u.includes('bing.com')) {
    return {icon:Search, color:'#06B6D4', label:'Search'};
  }
  if (u.includes('twitter.com') || u.includes('x.com')) {
    return {icon:MessageCircle, color:'#1DA1F2', label:'X'};
  }
  return {icon:ExternalLink, color:'#FBBF24', label:'Link'};
}

// Inline markdown processor: handles **bold** and [text](url) links with type-aware icons
function processInline(text, keyPrefix='') {
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIdx = 0, match;
  while ((match = linkRe.exec(text)) !== null) {
    if (match.index > lastIdx) parts.push({type:'text', value:text.slice(lastIdx, match.index)});
    parts.push({type:'link', label:match[1], url:match[2]});
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < text.length) parts.push({type:'text', value:text.slice(lastIdx)});

  const result = [];
  parts.forEach((p, i) => {
    if (p.type === 'link') {
      const meta = getLinkMeta(p.url);
      const Icon = meta.icon;
      result.push(
        <a key={`${keyPrefix}${i}_l`} href={p.url} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-bold px-2 py-1 mx-1 rounded-md border transition hover:scale-105"
          style={{color:meta.color, borderColor:`${meta.color}40`, background:`${meta.color}10`}}>
          <Icon size={12}/>
          <span>{p.label}</span>
        </a>
      );
    } else {
      const segs = p.value.split(/(\*\*.+?\*\*)/);
      segs.forEach((s, j) => {
        if (s.startsWith('**') && s.endsWith('**')) {
          result.push(<strong key={`${keyPrefix}${i}_${j}`} style={{color:'#FCD34D'}}>{s.replace(/\*\*/g,'')}</strong>);
        } else if (s) {
          result.push(<span key={`${keyPrefix}${i}_${j}`}>{s}</span>);
        }
      });
    }
  });
  return result;
}

function renderMD(text) {
  if (!text) return null;
  return text.split('\n').map((line, i) => {
    if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-black mt-5 mb-2" style={{color:'#FBBF24'}}>{line.replace('## ','')}</h2>;
    if (line.startsWith('### ')) return <h3 key={i} className="text-base font-bold mt-4 mb-2 text-amber-300">{line.replace('### ','')}</h3>;
    if (line.startsWith('#### ')) return <h4 key={i} className="font-bold mt-3 mb-2 text-amber-200">{line.replace('#### ','')}</h4>;
    if (line.match(/^\d+\./) || line.startsWith('- ')) {
      const cleaned = line.replace(/^[\d-]+\.\s?/,'').replace(/^- /,'');
      return <li key={i} className="mr-4 mb-1 text-slate-300 list-disc list-inside">{processInline(cleaned, `i${i}_`)}</li>;
    }
    if (line.trim()) return <p key={i} className="mb-2 text-slate-300 leading-relaxed">{processInline(line, `p${i}_`)}</p>;
    return null;
  });
}

function StarryBg() {
  const stars = useMemo(() => Array.from({length:80}, () => ({
    top:Math.random()*100, left:Math.random()*100, size:Math.random()*1.5+0.5,
    opacity:Math.random()*0.6+0.2, delay:Math.random()*5
  })), []);
  return (
    <div className="fixed inset-0 pointer-events-none" style={{zIndex:0}}>
      {stars.map((s,i)=>(
        <div key={i} className="absolute rounded-full" style={{
          top:`${s.top}%`, left:`${s.left}%`, width:`${s.size}px`, height:`${s.size}px`,
          background:'#FCD34D', opacity:s.opacity,
          boxShadow:`0 0 ${s.size*2}px rgba(252,211,77,${s.opacity*0.5})`,
          animation:`twinkle 4s ease-in-out ${s.delay}s infinite`
        }}/>
      ))}
    </div>
  );
}

function GlowBadge({children, color='#FBBF24'}) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 backdrop-blur-sm"
      style={{borderColor:color, background:`linear-gradient(135deg, ${color}15, transparent)`, boxShadow:`0 0 20px ${color}30`}}>
      {children}
    </div>
  );
}

function TopBar({onHome, title='محرك الذكاء', onCredits}) {
  return (
    <div className="sticky top-0 z-40 backdrop-blur-md border-b" style={{background:'rgba(10,14,26,0.85)', borderColor:'rgba(251,191,36,0.15)'}}>
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        <button onClick={onHome} data-tooltip="العودة للصفحة الرئيسية" className="flex items-center gap-2 px-3 py-2 rounded-xl border transition-all hover:scale-105"
          style={{borderColor:'#FBBF24', color:'#FBBF24', background:'rgba(251,191,36,0.08)'}}>
          <Home size={16}/><span className="text-sm font-semibold">الرئيسية</span>
        </button>
        <div className="flex items-center gap-2">
          <Brain size={20} style={{color:'#FBBF24'}}/>
          <span className="font-bold text-amber-100">{title}</span>
        </div>
        <button onClick={onCredits} data-tooltip="فيديو المصدر + المراجع + الكريديت" className="flex items-center gap-1 text-xs px-3 py-2 rounded-xl border text-amber-200/80 transition-all hover:scale-105"
          style={{borderColor:'rgba(251,191,36,0.3)'}}>
          <Info size={14}/><span>المصادر</span>
        </button>
      </div>
    </div>
  );
}

// AskAI button — opens modal with AI explanation
function AskAIButton({topic, label='اشرح أكثر', size='sm'}) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deep, setDeep] = useState(false);
  const fetch_ = async (d) => {
    setLoading(true); setDeep(d);
    try { setText(await aiExplain(topic, d)); }
    catch { setText('تعذّر التحميل، حاول مرة أخرى.'); }
    setLoading(false);
  };
  const open_ = () => { setOpen(true); if (!text) fetch_(false); };
  return (
    <>
      <button onClick={open_} className={`inline-flex items-center gap-1 rounded-lg font-bold transition-all hover:scale-105 ${size==='lg'?'px-3 py-1.5 text-sm':'px-2 py-1 text-xs'}`}
        style={{background:'rgba(251,191,36,0.1)', color:'#FBBF24', border:'1px solid rgba(251,191,36,0.3)'}}>
        <Sparkles size={size==='lg'?14:12}/><span>{label}</span>
      </button>
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 backdrop-blur-sm" style={{background:'rgba(0,0,0,0.7)'}} onClick={()=>setOpen(false)}>
          <div className="w-full max-w-xl max-h-[80vh] overflow-y-auto rounded-2xl border p-6" style={{background:'#0a0e1a', borderColor:'rgba(251,191,36,0.3)'}} onClick={e=>e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles size={18} style={{color:'#FBBF24'}}/>
                <h3 className="font-bold text-white text-sm">{topic}</h3>
              </div>
              <button onClick={()=>setOpen(false)} className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-white/5"><X size={18}/></button>
            </div>
            {loading && <div className="flex items-center gap-2 py-6 justify-center"><Loader2 className="animate-spin" size={20} style={{color:'#FBBF24'}}/><span className="text-amber-300 text-sm">يُحضّر الشرح...</span></div>}
            {text && !loading && (
              <>
                <div className="text-slate-200 text-sm leading-relaxed text-right">{renderMD(text)}</div>
                <div className="mt-4 flex gap-2 justify-end">
                  {!deep && <button onClick={()=>fetch_(true)} className="text-xs px-3 py-1.5 rounded-lg font-bold" style={{background:'rgba(251,191,36,0.15)', color:'#FBBF24'}}>تعمّق أكثر</button>}
                  <button onClick={()=>fetch_(deep)} className="text-xs px-3 py-1.5 rounded-lg border text-amber-200" style={{borderColor:'rgba(251,191,36,0.3)'}}>أعد الشرح</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// Disclaimer modal — first launch + accessible from credits
function DisclaimerModal({open, onClose}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 backdrop-blur-sm" style={{background:'rgba(0,0,0,0.85)'}}>
      <div className="w-full max-w-lg rounded-3xl border p-6 sm:p-8" style={{background:'linear-gradient(135deg, rgba(251,191,36,0.05), #0a0e1a)', borderColor:'rgba(251,191,36,0.4)'}}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{background:'rgba(251,191,36,0.15)', border:'1px solid rgba(251,191,36,0.4)'}}>
            <AlertTriangle size={22} style={{color:'#FBBF24'}}/>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">قبل أن تبدأ — اقرأ هذا</h2>
        </div>
        <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <p>هذه التجربة <strong className="text-amber-300">أداة وعي ذاتي</strong> مستوحاة من مقطع للأستاذ محمد النحيت، صُمّمت لمساعدتك على رؤية معززات ذكائك.</p>
          <p>📌 ليست بديلاً عن استشارة <strong className="text-white">المختصين</strong> النفسيين أو التربويين أو الماليين أو المهنيين.</p>
          <p>📌 النتائج مبنية على إجاباتك أنت — صدقك مع نفسك يحدد دقتها.</p>
          <p>📌 التحليلات والخطط مولّدة بالذكاء الاصطناعي (Claude) — إرشادات لا أحكام نهائية.</p>
          <p>📌 إن شعرت بضائقة نفسية حقيقية، تواصل مع مختص. هذه أداة، وأنت أكبر من أي أداة.</p>
        </div>
        <button onClick={onClose} className="w-full mt-6 py-3 rounded-xl font-bold text-slate-900 flex items-center justify-center gap-2"
          style={{background:'linear-gradient(135deg, #FBBF24, #F59E0B)'}}>
          <Check size={18}/> فهمت، أبدأ التجربة
        </button>
      </div>
    </div>
  );
}

// Personal Context Modal — collected once, used in AI prompts
function ContextModal({open, onSave, onSkip}) {
  const [age, setAge] = useState(null);
  const [stage, setStage] = useState(null);
  const [challenges, setChallenges] = useState([]);
  const toggleCh = (id) => setChallenges(c => c.includes(id) ? c.filter(x=>x!==id) : [...c, id]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto" style={{background:'rgba(0,0,0,0.85)'}}>
      <div className="w-full max-w-2xl my-8 rounded-3xl border p-6 sm:p-8" style={{background:'#0a0e1a', borderColor:'rgba(251,191,36,0.3)'}}>
        <div className="text-center mb-6">
          <Sparkles size={32} className="mx-auto mb-3" style={{color:'#FBBF24'}}/>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">سياقك الشخصي</h2>
          <p className="text-slate-400 text-sm">معلومات تساعد المرشد الذكي على تخصيص نصائحه. كلها اختيارية.</p>
        </div>
        <div className="mb-6">
          <h3 className="text-amber-300 font-bold mb-3 text-sm">في أي مرحلة عمرية؟</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {AGE_RANGES.map(a => (
              <button key={a.id} onClick={()=>setAge(a.id)} className="p-3 rounded-xl border text-center transition-all"
                style={{borderColor:age===a.id?'#FBBF24':'rgba(255,255,255,0.1)', background:age===a.id?'rgba(251,191,36,0.1)':'rgba(255,255,255,0.02)'}}>
                <a.Icon size={18} className="mx-auto mb-1" style={{color:age===a.id?'#FBBF24':'#94A3B8'}}/>
                <div className="text-xs font-bold text-white">{a.label}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{a.sub}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-amber-300 font-bold mb-3 text-sm">المرحلة الأقرب؟</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {LIFE_STAGES.map(s => (
              <button key={s.id} onClick={()=>setStage(s.id)} className="p-3 rounded-xl border text-center transition-all"
                style={{borderColor:stage===s.id?'#FBBF24':'rgba(255,255,255,0.1)', background:stage===s.id?'rgba(251,191,36,0.1)':'rgba(255,255,255,0.02)'}}>
                <s.Icon size={18} className="mx-auto mb-1" style={{color:stage===s.id?'#FBBF24':'#94A3B8'}}/>
                <div className="text-xs font-bold text-white">{s.label}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-amber-300 font-bold mb-3 text-sm">تحديات حالية؟ <span className="text-slate-500 font-normal">(اختر ما يناسبك)</span></h3>
          <div className="flex flex-wrap gap-2">
            {CHALLENGES.map(c => (
              <button key={c.id} onClick={()=>toggleCh(c.id)} className="px-3 py-1.5 rounded-full border text-xs font-semibold transition-all"
                style={{borderColor:challenges.includes(c.id)?'#FBBF24':'rgba(255,255,255,0.15)', background:challenges.includes(c.id)?'rgba(251,191,36,0.15)':'transparent', color:challenges.includes(c.id)?'#FBBF24':'#CBD5E1'}}>
                {c.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={onSkip} className="flex-1 py-3 rounded-xl border text-amber-200 font-bold" style={{borderColor:'rgba(251,191,36,0.3)'}}>تخطّي</button>
          <button onClick={()=>onSave({age, stage, challenges})} className="flex-[2] py-3 px-6 rounded-xl font-bold text-slate-900"
            style={{background:'linear-gradient(135deg, #FBBF24, #F59E0B)'}}>
            احفظ وأكمل
          </button>
        </div>
      </div>
    </div>
  );
}

// Knowledge Map — Rotating interactive SVG mind map
function KnowledgeMap({onSelect}) {
  const [hover, setHover] = useState(null);
  const cx=250, cy=250, r=180;
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <svg viewBox="0 0 500 500" className="w-full">
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.3"/>
            <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.05"/>
            <stop offset="100%" stopColor="transparent"/>
          </radialGradient>
        </defs>
        {/* Static orbit rings */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(251,191,36,0.1)" strokeWidth="1" strokeDasharray="2,4"/>
        <circle cx={cx} cy={cy} r={140} fill="none" stroke="rgba(251,191,36,0.07)" strokeDasharray="1,3"/>
        <circle cx={cx} cy={cy} r={100} fill="none" stroke="rgba(251,191,36,0.05)"/>
        <circle cx={cx} cy={cy} r={r+10} fill="url(#centerGlow)" opacity="0.5"/>
        {/* Rotating orbit group — pauses on hover */}
        <g className={`orbit-rotate ${hover ? 'paused' : ''}`}>
          {BOOSTERS.map((b, i) => {
            const a = (i*40-90)*Math.PI/180;
            const x = cx+Math.cos(a)*r, y = cy+Math.sin(a)*r;
            return (
              <line key={`l_${b.id}`} x1={cx} y1={cy} x2={x} y2={y}
                stroke={hover===b.id?b.color:'rgba(251,191,36,0.2)'}
                strokeWidth={hover===b.id?2:1}
                strokeDasharray={hover===b.id?'0':'4,4'}
                style={{transition:'all 0.3s'}}/>
            );
          })}
          {BOOSTERS.map((b, i) => {
            const a = (i*40-90)*Math.PI/180;
            const x = cx+Math.cos(a)*r, y = cy+Math.sin(a)*r;
            const h = hover===b.id;
            return (
              <g key={b.id} style={{cursor:'pointer'}}
                onMouseEnter={()=>setHover(b.id)} onMouseLeave={()=>setHover(null)} onClick={()=>onSelect(b.id)}>
                {/* Outer glow */}
                <circle cx={x} cy={y} r={h?38:32} fill={`${b.color}10`} opacity={h?0.8:0.3} style={{transition:'all 0.3s'}}/>
                <circle cx={x} cy={y} r={h?30:26} fill={`${b.color}25`} stroke={b.color} strokeWidth={h?2.5:1.5}
                  style={{transition:'all 0.3s', filter:h?`drop-shadow(0 0 14px ${b.color})`:`drop-shadow(0 0 4px ${b.color})`}}/>
                <foreignObject x={x-12} y={y-12} width="24" height="24" style={{pointerEvents:'none'}}>
                  <div xmlns="http://www.w3.org/1999/xhtml" style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%'}}>
                    <b.Icon size={h?22:20} color={b.color} strokeWidth={2}/>
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </g>
        {/* Static center brain — does NOT rotate */}
        <circle cx={cx} cy={cy} r={75} fill="rgba(251,191,36,0.08)" stroke="#FBBF24" strokeWidth="2" className="pulse-ring"/>
        <circle cx={cx} cy={cy} r={62} fill="rgba(10,14,26,0.95)" stroke="rgba(251,191,36,0.4)" strokeWidth="1.5"/>
        <g className="float-anim">
          <text x={cx} y={cy-3} textAnchor="middle" fontSize="24" fontWeight="900" fill="#FBBF24">الذكاء</text>
          <text x={cx} y={cy+20} textAnchor="middle" fontSize="11" fill="#94A3B8">المحرك المركزي</text>
        </g>
      </svg>
      {hover && (() => {
        const b = BOOSTERS.find(x=>x.id===hover);
        return (
          <div className="absolute top-2 right-2 left-2 sm:left-auto sm:max-w-xs p-3 rounded-xl border backdrop-blur-md text-right scale-in" style={{background:'rgba(10,14,26,0.95)', borderColor:b.color, boxShadow: `0 0 25px ${b.color}40`}}>
            <div className="flex items-center gap-2 mb-1">
              <b.Icon size={16} style={{color:b.color}}/>
              <span className="font-bold text-white text-sm">{b.name}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{b.tagline}</p>
            <div className="mt-1 text-[10px]" style={{color:b.color}}>{b.equation}</div>
          </div>
        );
      })()}
      <div className="text-center mt-4">
        <p className="text-xs text-slate-400">الخارطة تدور تلقائياً — مرر فوق أي معزز ليتوقف الدوران ويظهر الشرح</p>
      </div>
    </div>
  );
}

function BoosterHeroArt({booster}) {
  const {color, Icon, num, name, tagline, equation, id} = booster;
  // Decorative scene elements per booster type — symbolic icons surrounding the hero
  const sceneElements = {
    discipline: ['🎯','⏱','📅','✓'], execution: ['💪','📈','🏆','🔥'],
    communication: ['💬','📢','🌐','💡'], humility: ['📖','🌱','🔍','✨'],
    emotional: ['❤️','🤝','😊','🎭'], flexibility: ['🔄','🌊','🦋','⚡'],
    financial: ['💰','📊','💎','🏦'], trust: ['🛡','🤲','⭐','🔒'],
    relationships: ['👥','💝','🌟','🤗']
  };
  const symbols = sceneElements[id] || ['✨','⭐','💫','🌟'];
  return (
    <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden border-2 scale-in" style={{
      borderColor:`${color}50`,
      background:`linear-gradient(135deg, ${color}18 0%, rgba(10,14,26,0.95) 50%, ${color}10 100%)`
    }}>
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0" style={{
        background: `radial-gradient(circle at 25% 30%, ${color}25, transparent 50%), radial-gradient(circle at 75% 70%, ${color}15, transparent 50%)`
      }}/>
      {/* Grid + decorative paths */}
      <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 800 350" preserveAspectRatio="none">
        <defs>
          <pattern id={`g_${id}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={color} strokeWidth="0.5"/>
          </pattern>
          <linearGradient id={`fade_${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0.5"/>
            <stop offset="100%" stopColor={color} stopOpacity="0"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill={`url(#g_${id})`}/>
        <path d="M 0 120 Q 200 80, 400 120 T 800 120" stroke={`url(#fade_${id})`} fill="none" strokeWidth="1.5"/>
        <path d="M 0 220 Q 200 180, 400 220 T 800 220" stroke={`url(#fade_${id})`} fill="none" strokeWidth="1" opacity="0.6"/>
      </svg>
      {/* Floating particles */}
      {Array.from({length:35}).map((_, i) => (
        <div key={i} className="absolute rounded-full float-anim" style={{
          top:`${Math.random()*80+5}%`, left:`${Math.random()*100}%`,
          width: i%5===0?'3px':'2px', height: i%5===0?'3px':'2px',
          background: i%3===0?color:'#FCD34D', opacity:0.4+Math.random()*0.5,
          boxShadow:`0 0 ${i%3===0?6:3}px ${color}`,
          animationDelay:`${Math.random()*4}s`,
          animationDuration:`${3+Math.random()*3}s`
        }}/>
      ))}
      {/* Floating symbols around the icon */}
      {symbols.map((sym, i) => {
        const positions = [{top:'15%',left:'25%'},{top:'20%',right:'30%'},{bottom:'25%',left:'30%'},{bottom:'15%',right:'25%'}];
        return (
          <div key={i} className="absolute float-anim text-2xl sm:text-3xl pointer-events-none" style={{
            ...positions[i], opacity:0.85,
            filter:`drop-shadow(0 0 8px ${color}80)`,
            animationDelay:`${i*0.8}s`, animationDuration:`${4+i*0.5}s`
          }}>{sym}</div>
        );
      })}
      {/* Number badge - top right */}
      <div className="absolute top-6 right-6 z-10">
        <div className="px-4 py-2 rounded-xl border-2 backdrop-blur" style={{borderColor:color, background:`${color}25`, boxShadow:`0 0 20px ${color}50`}}>
          <div className="text-[10px] text-white/70">المعزز</div>
          <div className="text-2xl font-black" style={{color}}>{num} / 9</div>
        </div>
      </div>
      {/* Central icon with multiple animated rings */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2">
        {/* Outer dashed rotating ring */}
        <div className="absolute -inset-12 rounded-full opacity-40 spin-slower" style={{border:`1px dashed ${color}`}}/>
        {/* Middle rotating ring (reverse) */}
        <div className="absolute -inset-6 rounded-full spin-reverse" style={{border:`1px solid ${color}50`}}/>
        {/* Center hero circle */}
        <div className="relative flex items-center justify-center w-32 h-32 rounded-full border-2 backdrop-blur-md float-anim"
          style={{borderColor:color, background:`radial-gradient(circle, ${color}40 0%, ${color}15 50%, transparent 80%)`, boxShadow:`0 0 60px ${color}, inset 0 0 30px ${color}40`}}>
          <Icon size={56} style={{color}} strokeWidth={1.2}/>
        </div>
        {/* Orbiting decorative dots */}
        <div className="absolute inset-0 spin-slow" style={{width:'8rem', height:'8rem'}}>
          {[0,120,240].map(deg => (
            <div key={deg} className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full" style={{
              transform:`rotate(${deg}deg) translateY(-72px)`,
              background:color, boxShadow:`0 0 10px ${color}, 0 0 4px white`
            }}/>
          ))}
        </div>
      </div>
      {/* Title section - bottom */}
      <div className="absolute bottom-6 right-6 left-6 z-10 fade-in-up" style={{animationDelay:'0.2s'}}>
        <div className="text-4xl sm:text-5xl font-black text-white mb-1 tracking-tight">{name}</div>
        <div className="text-sm text-amber-200/80 mb-2">{tagline}</div>
        <div className="inline-flex px-3 py-1 rounded-full border" style={{borderColor:`${color}50`, background:`${color}15`}}>
          <span className="text-xs font-bold" style={{color}}>{equation}</span>
        </div>
      </div>
    </div>
  );
}

function Avatar({name, color, size=80, photo=null}) {
  const ini = name.split(' ').slice(-2).map(w=>w[0]).join('');
  if (photo) {
    return (
      <div className="relative inline-block mx-auto">
        {/* Outer rotating glow ring */}
        <div className="absolute -inset-2 rounded-full opacity-60 spin-slower" style={{
          background:`conic-gradient(from 0deg, ${color}, ${color}40, ${color}, ${color}40, ${color})`,
          filter:'blur(8px)'
        }}/>
        {/* Photo with colored border */}
        <div className="relative rounded-full overflow-hidden border-[3px]"
          style={{
            width:size, height:size, borderColor:color,
            boxShadow:`0 0 30px ${color}60, inset 0 0 0 2px rgba(10,14,26,0.5)`
          }}>
          <img src={photo} alt={name} className="w-full h-full object-cover"/>
          {/* Subtle vignette for depth */}
          <div className="absolute inset-0 pointer-events-none rounded-full" style={{
            boxShadow:`inset 0 0 25px rgba(10,14,26,0.5)`
          }}/>
        </div>
      </div>
    );
  }
  // Fallback: initials
  return (
    <div className="rounded-full flex items-center justify-center border-2 font-black mx-auto"
      style={{width:size, height:size, background:`linear-gradient(135deg, ${color}30, ${color}10)`,
        borderColor:color, color:color, fontSize:size*0.32, boxShadow:`0 0 25px ${color}40`}}>
      {ini}
    </div>
  );
}

function BoosterCard({booster, onClick, score=null, idx=0}) {
  const {color, name, equation, description, Icon, num} = booster;
  return (
    <button onClick={onClick} className="group p-5 rounded-2xl border text-right lift-on-hover w-full fade-in-up"
      style={{borderColor:`${color}30`, background:`linear-gradient(135deg, ${color}08, rgba(15,23,41,0.95))`, boxShadow:`0 0 30px ${color}15`, animationDelay:`${idx*0.05}s`}}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl border" style={{borderColor:`${color}50`, background:`${color}15`}}>
          <Icon size={22} style={{color}} strokeWidth={1.5}/>
        </div>
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-black border-2" style={{borderColor:color, color, background:`${color}15`}}>{num}</div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
      <p className="text-xs leading-relaxed text-slate-400 mb-3">{description}</p>
      <div className="mt-3 pt-3 border-t" style={{borderColor:`${color}20`}}>
        <div className="text-[10px] text-amber-300/70 mb-1">المعادلة:</div>
        <div className="text-sm font-bold" style={{color}}>{equation}</div>
      </div>
      {score!==null && (
        <div className="mt-3 flex items-center justify-between">
          <span className="text-2xl font-black" style={{color}}>{score}/10</span>
        </div>
      )}
      <div className="mt-3 pt-3 border-t flex items-center justify-end gap-1 text-xs font-bold transition-all group-hover:gap-2" style={{borderColor:`${color}10`, color}}>
        <span>اقرأ المزيد</span>
        <ChevronLeft size={12}/>
      </div>
    </button>
  );
}

// AI Coach (context-aware)
function AICoach({scores, ctx, onAsk}) {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([{role:'assistant', content: scores ? 'أهلاً! أنا مرشدك الذكي، أمامي نتائجك وسياقك. اسألني عن نقاط قوتك أو موقف تواجهه.' : 'أهلاً! ابدأ بتقييم نفسك أولاً لتلقّى توجيهاً مخصصاً.'}]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  useEffect(() => { ref.current?.scrollIntoView({behavior:'smooth'}); }, [msgs, loading]);
  const send = async () => {
    if (!input.trim() || loading) return;
    const q = input.trim(); setInput('');
    setMsgs(m => [...m, {role:'user', content:q}]);
    setLoading(true); onAsk?.();
    try {
      const reply = await aiCoach(q, scores, msgs, ctx);
      setMsgs(m => [...m, {role:'assistant', content: reply}]);
    } catch {
      setMsgs(m => [...m, {role:'assistant', content:'تعذّر الاتصال، حاول بعد لحظة.'}]);
    }
    setLoading(false);
  };
  const sugg = scores ? ['ما أكبر عقبة في طريقي؟', 'كيف أبدأ بأضعف معزز؟', 'موقف اليوم — ساعدني'] : ['ما المعززات التسعة؟', 'لماذا الذكاء وحده لا يكفي؟', 'من أين أبدأ؟'];
  return (
    <>
      <button onClick={()=>setOpen(true)} data-tooltip="مرشدك الذكي — يعرف نتائجك وسياقك" className="fixed bottom-6 left-6 z-50 group flex items-center gap-2 transition-all hover:scale-105">
        <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center pulse-glow"
          style={{borderColor:'#FBBF24', background:'linear-gradient(135deg, #FBBF24, #F59E0B)'}}>
          <Sparkles size={24} className="text-slate-900"/>
        </div>
        <div className="hidden sm:block px-3 py-2 rounded-xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
          style={{background:'rgba(10,14,26,0.95)', color:'#FBBF24', border:'1px solid rgba(251,191,36,0.4)'}}>
          اسأل المرشد
        </div>
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 backdrop-blur-sm" style={{background:'rgba(0,0,0,0.6)'}} onClick={()=>setOpen(false)}>
          <div className="w-full sm:max-w-lg h-[88vh] sm:h-[640px] rounded-t-3xl sm:rounded-3xl border flex flex-col"
            style={{background:'#0a0e1a', borderColor:'rgba(251,191,36,0.3)'}} onClick={e=>e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b" style={{borderColor:'rgba(251,191,36,0.15)'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background:'linear-gradient(135deg, #FBBF24, #F59E0B)'}}>
                  <Sparkles size={18} className="text-slate-900"/>
                </div>
                <div>
                  <div className="font-bold text-white">المرشد الذكي</div>
                  <div className="text-xs text-amber-300/70">شخصي · يعرف نتائجك وسياقك</div>
                </div>
              </div>
              <button onClick={()=>setOpen(false)} className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-white/5"><X size={18}/></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.role==='user'?'justify-start':'justify-end'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${m.role==='user'?'rounded-bl-sm':'rounded-br-sm'}`}
                    style={m.role==='user' ? {background:'rgba(251,191,36,0.15)', color:'#FCD34D', border:'1px solid rgba(251,191,36,0.3)'} : {background:'rgba(255,255,255,0.05)', color:'#E2E8F0', border:'1px solid rgba(255,255,255,0.1)'}}>
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && <div className="flex justify-end"><div className="p-3 rounded-2xl" style={{background:'rgba(255,255,255,0.05)'}}><Loader2 size={16} className="animate-spin text-amber-400"/></div></div>}
              <div ref={ref}/>
            </div>
            {msgs.length<=1 && (
              <div className="px-3 pb-2 flex flex-wrap gap-2">
                {sugg.map(s => (
                  <button key={s} onClick={()=>setInput(s)} className="text-xs px-2 py-1 rounded-full border text-amber-200/80" style={{borderColor:'rgba(251,191,36,0.2)'}}>{s}</button>
                ))}
              </div>
            )}
            <div className="p-3 border-t flex gap-2" style={{borderColor:'rgba(251,191,36,0.15)'}}>
              <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()}
                placeholder="اسأل، أو اشرح موقفاً تواجهه..." className="flex-1 px-4 py-3 rounded-xl outline-none text-sm"
                style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', color:'white'}}/>
              <button onClick={send} disabled={loading || !input.trim()} className="w-12 h-12 rounded-xl flex items-center justify-center disabled:opacity-50"
                style={{background:'linear-gradient(135deg, #FBBF24, #F59E0B)'}}>
                <Send size={18} className="text-slate-900"/>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ═══ PAGES ═══
function HomePage({go, ctx}) {
  return (
    <div className="relative">
      <div className="text-center pt-12 pb-8 px-4">
        <GlowBadge><Sparkles size={14} style={{color:'#FBBF24'}}/><span className="text-amber-300 text-xs font-bold">محرك الذكاء</span></GlowBadge>
        <h1 className="mt-6 text-5xl sm:text-7xl font-black leading-tight tracking-tight">
          <span className="text-white">المعززات </span>
          <span style={{color:'#FBBF24', textShadow:'0 0 40px rgba(251,191,36,0.5)'}}>التسعة</span>
          <br/><span className="text-white">للنجاح </span><span className="text-white">الحقيقي</span>
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-slate-400 leading-relaxed">
          الذكاء يعطيك الاحتمال، لكن المهارات هي التي تعطيك النتيجة.
          <br/>اكتشف أقوى معززاتك وأضعف حلقاتك.
        </p>

        <div className="mt-10"><KnowledgeMap onSelect={(id)=>go('booster', id)}/></div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto px-4">
          <button onClick={()=>go('assessment')} data-tooltip="ابدأ اكتشاف معززاتك التسعة" className="flex items-center justify-center gap-2 py-4 px-3 rounded-xl font-bold text-slate-900 transition-all hover:scale-105 pulse-glow"
            style={{background:'linear-gradient(135deg, #FBBF24, #F59E0B)'}}>
            <Zap size={16}/><span className="text-sm">قيّم نفسك</span>
          </button>
          <button onClick={()=>go('assessOthers')} data-tooltip="قيّم زوج، ابن، صديق، زميل" className="flex items-center justify-center gap-2 py-4 px-3 rounded-xl border text-amber-200 transition-all hover:scale-105 hover:bg-amber-400/5" style={{borderColor:'rgba(251,191,36,0.4)'}}>
            <Users size={16}/><span className="text-sm">قيّم غيرك</span>
          </button>
          <button onClick={()=>go('learn')} data-tooltip="مفاهيم تغيّر نظرتك للأداء" className="flex items-center justify-center gap-2 py-4 px-3 rounded-xl border text-amber-200 transition-all hover:scale-105 hover:bg-amber-400/5" style={{borderColor:'rgba(251,191,36,0.4)'}}>
            <Lightbulb size={16}/><span className="text-sm">تعلّم لك فرقة</span>
          </button>
          <button onClick={()=>go('library')} data-tooltip="مقالات وتوصيات لكل معزز" className="flex items-center justify-center gap-2 py-4 px-3 rounded-xl border text-amber-200 transition-all hover:scale-105 hover:bg-amber-400/5" style={{borderColor:'rgba(251,191,36,0.4)'}}>
            <BookOpen size={16}/><span className="text-sm">المكتبة</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {id:'plan', name:'خطة 30 يوم', sub:'مهام مخصّصة بالذكاء', Icon:ClipboardList, color:'#10B981', tip:'خطة تدريبية AI لـ30 يوماً'},
            {id:'progress', name:'تطور أدائك', sub:'تتبع نتائجك', Icon:TrendingUp, color:'#FBBF24', tip:'منحنى تطورك عبر الزمن'},
            {id:'badges', name:'أوسمة الإنجاز', sub:'إنجازاتك', Icon:Award, color:'#F97316', tip:'12 وساماً تنتظرك'},
            {id:'credits', name:'المصدر والكريديت', sub:'الفيديو + المراجع', Icon:Info, color:'#A78BFA', tip:'فيديو الأستاذ النحيت + المراجع'}
          ].map(f => (
            <button key={f.id} onClick={()=>go(f.id)} data-tooltip={f.tip} className="p-5 rounded-2xl border text-right lift-on-hover"
              style={{borderColor:`${f.color}30`, background:`linear-gradient(135deg, ${f.color}08, rgba(15,23,41,0.95))`}}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{background:`${f.color}15`, border:`1px solid ${f.color}40`}}>
                <f.Icon size={20} style={{color:f.color}}/>
              </div>
              <div className="font-bold text-white text-base mb-1">{f.name}</div>
              <div className="text-xs text-slate-400">{f.sub}</div>
            </button>
          ))}
        </div>
      </div>

      {/* كيمياء النجاح — Equation chemistry grid */}
      <div className="max-w-5xl mx-auto px-4 mt-16">
        <div className="rounded-3xl border p-6 sm:p-8" style={{background:'linear-gradient(135deg, rgba(251,191,36,0.05), rgba(15,23,41,0.6))', borderColor:'rgba(251,191,36,0.25)'}}>
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-2">
              <Brain size={18} style={{color:'#FBBF24'}}/>
              <h3 className="text-2xl font-black text-amber-300">كيمياء النجاح</h3>
            </div>
            <p className="text-slate-400 text-sm">المعادلات التسعة التي تحوّل ذكاءك إلى نتائج ملموسة</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {BOOSTERS.map(b => (
              <button key={b.id} onClick={()=>go('booster', b.id)} data-tooltip={`اكتشف ${b.name}`}
                className="p-3 rounded-xl border text-right transition-all hover:scale-[1.03] hover:-translate-y-0.5 flex items-center gap-3"
                style={{borderColor:`${b.color}30`, background:`${b.color}06`}}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:`${b.color}15`}}>
                  <b.Icon size={14} style={{color:b.color}}/>
                </div>
                <div className="text-xs font-bold flex-1" style={{color:b.color}}>{b.equation}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black mb-3"><span style={{color:'#FBBF24'}}>معادلات</span> <span className="text-white">النجاح</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">الذكاء مثل الأرز — مكوّن أساسي يحتاج بهارات المعززات</p>
          <div className="mt-3 flex justify-center"><AskAIButton topic="الفرق بين الذكاء والمهارة" label="اشرح لي" size="lg"/></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BOOSTERS.map((b, i) => <BoosterCard key={b.id} booster={b} idx={i} onClick={()=>go("booster", b.id)}/>)}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-16">
        <div className="rounded-2xl border p-5 flex items-center gap-4" style={{background:'rgba(251,191,36,0.05)', borderColor:'rgba(251,191,36,0.2)'}}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(239,68,68,0.15)'}}>
            <Play size={20} className="text-rose-400 ml-0.5"/>
          </div>
          <div className="flex-1 text-right">
            <p className="text-amber-200 font-bold text-sm">هذه التجربة خلاصة مقطع يوتيوب</p>
            <p className="text-slate-400 text-xs">للأستاذ محمد النحيت — اضغط لمشاهدة المصدر</p>
          </div>
          <button onClick={()=>go('credits')} className="text-xs px-3 py-2 rounded-lg font-bold text-slate-900" style={{background:'linear-gradient(135deg, #FBBF24, #F59E0B)'}}>اعرف أكثر</button>
        </div>
      </div>

      <div className="text-center py-12 px-4 mt-12">
        <div className="text-amber-300/80 text-sm mb-1">المادة العلمية: الأستاذ / محمد النحيت</div>
        <div className="text-amber-300/80 text-sm">فكرة وتصميم م / <span style={{color:'#FBBF24'}} className="font-bold">عادل الزهراني</span></div>
      </div>
    </div>
  );
}

function AssessmentPage({onComplete, onBack}) {
  const all = useMemo(() => {
    const arr = [];
    BOOSTERS.forEach(b => b.questions.forEach((q, i) => arr.push({booster:b, question:q, index:i})));
    return arr;
  }, []);
  const [cur, setCur] = useState(0);
  const [ans, setAns] = useState({});
  const total = all.length;
  const c = all[cur];
  const progress = ((cur+1)/total)*100;
  const answer = (sc) => {
    const k = `${c.booster.id}_${c.index}`;
    const newAns = {...ans, [k]:sc};
    setAns(newAns);
    if (cur < total-1) setTimeout(()=>setCur(cur+1), 300);
    else setTimeout(()=>{
      const final = {};
      BOOSTERS.forEach(b => {
        const sum = b.questions.reduce((s, _, i) => s+(newAns[`${b.id}_${i}`]||0), 0);
        final[b.id] = Math.round(sum/b.questions.length);
      });
      onComplete(final);
    }, 400);
  };
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-center mb-6">
        <GlowBadge><Brain size={14} style={{color:'#FBBF24'}}/><span className="text-amber-300 text-xs font-bold">تقييم محرك الذكاء</span></GlowBadge>
      </div>
      <div className="flex items-center justify-between mb-3 text-sm">
        <span className="text-amber-300 font-bold">{Math.round(progress)}%</span>
        <span className="text-slate-400">السؤال {cur+1} من {total}</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden mb-10" style={{background:'rgba(251,191,36,0.1)'}}>
        <div className="h-full rounded-full transition-all duration-500" style={{width:`${progress}%`, background:'linear-gradient(90deg, #FBBF24, #F59E0B)', boxShadow:'0 0 15px rgba(251,191,36,0.6)'}}/>
      </div>
      <div className="rounded-3xl border p-6 sm:p-10" style={{background:'rgba(15,23,41,0.6)', borderColor:`${c.booster.color}30`}}>
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-3">
            <div>
              <div className="text-sm font-bold" style={{color:c.booster.color}}>معزز {c.booster.name}</div>
              <div className="text-xs text-slate-400">سؤال {c.index+1} من {c.booster.questions.length}</div>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{borderColor:c.booster.color, background:`${c.booster.color}15`}}>
              <c.booster.Icon size={22} style={{color:c.booster.color}}/>
            </div>
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-right leading-snug mb-10">{c.question}</h2>
        <div className="grid grid-cols-5 gap-2 sm:gap-3">
          {ANSWER_OPTIONS.map(opt => (
            <button key={opt.score} onClick={()=>answer(opt.score)} className="aspect-square rounded-xl border flex flex-col items-center justify-center gap-2 transition-all hover:scale-110 hover:-translate-y-1"
              style={{borderColor:'rgba(251,191,36,0.2)', background:'rgba(15,23,41,0.5)'}}>
              <div className="text-3xl sm:text-4xl">{opt.emoji}</div>
              <div className="text-xs sm:text-sm text-slate-300 font-semibold">{opt.label}</div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button disabled={cur===0} onClick={()=>setCur(c=>Math.max(0,c-1))} className="flex items-center gap-2 px-4 py-2 rounded-xl border text-amber-200/80 disabled:opacity-30" style={{borderColor:'rgba(251,191,36,0.2)'}}>
          <ChevronLeft size={16} className="rotate-180"/><span className="text-sm">السابق</span>
        </button>
        <button onClick={onBack} className="flex items-center gap-2 px-4 py-2 rounded-xl border text-amber-200/80" style={{borderColor:'rgba(251,191,36,0.2)'}}>
          <span className="text-sm">إلغاء</span>
        </button>
      </div>
    </div>
  );
}

// CountUp — animated number counter for stat displays
function CountUp({target, suffix='', prefix='', className='', style={}}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf, start = performance.now();
    const dur = 900;
    const tick = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return <span className={className} style={style}>{prefix}{val}{suffix}</span>;
}

// Shorter display names for radar visualization (avoid label overflow)
const RADAR_LABELS = {
  discipline:'الانضباط', execution:'التنفيذ', communication:'التواصل',
  humility:'التواضع', emotional:'الذكاء العاطفي', flexibility:'المرونة',
  financial:'الحكمة المالية', trust:'الموثوقية', relationships:'العلاقات'
};

// EnhancedRadar — custom interactive multi-color radar with explanations
function EnhancedRadar({scores, title='مقياس معززاتك التفاعلي', subtitle='كل خط مُلوَّن بلون معززه. كلما امتدّ الشكل خارجاً، كان أداؤك أقوى في ذلك المعزز.'}) {
  const [hover, setHover] = useState(null);
  const cx=200, cy=200, maxR=125;
  const points = BOOSTERS.map((b, i) => {
    const angle = (i*40-90)*Math.PI/180;
    const score = scores[b.id] || 0;
    const r = (score/10) * maxR;
    return {
      booster:b, score, angle,
      x: cx+Math.cos(angle)*r, y: cy+Math.sin(angle)*r,
      lx: cx+Math.cos(angle)*(maxR+28), ly: cy+Math.sin(angle)*(maxR+28),
      ax: cx+Math.cos(angle)*maxR, ay: cy+Math.sin(angle)*maxR
    };
  });
  const polyPoints = points.map(p => `${p.x},${p.y}`).join(' ');
  const rings = [0.25, 0.5, 0.75, 1];
  const total = Object.values(scores).reduce((a,b)=>a+b, 0);
  const avg = (total/9).toFixed(1);
  // Scale labels positioned at 30 degrees (between top and right) to avoid booster label overlap
  const scaleAngle = 30*Math.PI/180; // diagonal up-right
  return (
    <div className="rounded-3xl border p-6" style={{background:'linear-gradient(135deg, rgba(251,191,36,0.04), rgba(15,23,41,0.7))', borderColor:'rgba(251,191,36,0.25)'}}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-amber-300">{title}</h3>
        <span className="text-xs px-3 py-1 rounded-full" style={{background:'rgba(251,191,36,0.1)', color:'#FBBF24'}}>مرر فوق أي معزز</span>
      </div>
      <p className="text-xs text-slate-400 mb-4">{subtitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-2 relative">
          <svg viewBox="0 0 400 400" className="w-full" style={{overflow:'visible'}}>
            <defs>
              <radialGradient id="radarFill" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.35"/>
                <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.08"/>
              </radialGradient>
            </defs>
            {/* Concentric ring grid — thin dotted */}
            {rings.map((f, i) => (
              <circle key={i} cx={cx} cy={cy} r={maxR*f} fill="none" stroke="rgba(251,191,36,0.1)" strokeWidth="0.5" strokeDasharray={i===rings.length-1?'0':'1,3'}/>
            ))}
            {/* Scale labels — placed off-axis on diagonal to avoid booster label overlap */}
            {[2.5, 5, 7.5, 10].map((s, i) => {
              const r = maxR*(s/10);
              const lblX = cx + Math.cos(-scaleAngle)*r;
              const lblY = cy - Math.sin(scaleAngle)*r;
              return (
                <text key={i} x={lblX+5} y={lblY-2} fontSize="7.5" fill="rgba(251,191,36,0.4)" fontFamily="monospace">{s}</text>
              );
            })}
            {/* Axis lines — very thin, colored by booster */}
            {points.map(p => (
              <line key={`ax_${p.booster.id}`} x1={cx} y1={cy} x2={p.ax} y2={p.ay}
                stroke={hover===p.booster.id?p.booster.color:`${p.booster.color}30`}
                strokeWidth={hover===p.booster.id?1:0.5}
                style={{transition:'all 0.3s'}}/>
            ))}
            {/* Filled polygon — current scores */}
            <polygon points={polyPoints} fill="url(#radarFill)" stroke="#FBBF24" strokeWidth="1.5"
              style={{filter:'drop-shadow(0 0 10px rgba(251,191,36,0.4))', transition:'all 0.4s'}}/>
            {/* Score dots — colored by booster */}
            {points.map(p => {
              const h = hover===p.booster.id;
              return (
                <g key={p.booster.id} style={{cursor:'pointer'}}
                  onMouseEnter={()=>setHover(p.booster.id)} onMouseLeave={()=>setHover(null)}>
                  <circle cx={p.x} cy={p.y} r={20} fill="transparent"/>
                  <circle cx={p.x} cy={p.y} r={h?7:4.5} fill={p.booster.color} stroke="#0a0e1a" strokeWidth="1.5"
                    style={{transition:'all 0.25s', filter:`drop-shadow(0 0 ${h?10:5}px ${p.booster.color})`}}/>
                  {h && (
                    <g>
                      <rect x={p.x-18} y={p.y-30} width="36" height="18" rx="4" fill="#0a0e1a" stroke={p.booster.color} strokeWidth="1"/>
                      <text x={p.x} y={p.y-17} textAnchor="middle" fontSize="11" fontWeight="900" fill={p.booster.color}>{p.score}/10</text>
                    </g>
                  )}
                </g>
              );
            })}
            {/* Booster labels around perimeter — using shortened names */}
            {points.map(p => {
              const h = hover===p.booster.id;
              const anchor = p.lx<cx-8?'end':p.lx>cx+8?'start':'middle';
              return (
                <g key={`lbl_${p.booster.id}`} style={{cursor:'pointer'}}
                  onMouseEnter={()=>setHover(p.booster.id)} onMouseLeave={()=>setHover(null)}>
                  <text x={p.lx} y={p.ly+3} textAnchor={anchor} fontSize={h?11:10} fontWeight={h?800:600}
                    fill={h?p.booster.color:'#94A3B8'} style={{transition:'all 0.25s'}}>
                    {RADAR_LABELS[p.booster.id]}
                  </text>
                </g>
              );
            })}
            {/* Center summary */}
            <circle cx={cx} cy={cy} r={24} fill="rgba(10,14,26,0.95)" stroke="#FBBF24" strokeWidth="1"/>
            <text x={cx} y={cy-2} textAnchor="middle" fontSize="13" fontWeight="900" fill="#FBBF24">{avg}</text>
            <text x={cx} y={cy+11} textAnchor="middle" fontSize="7" fill="#94A3B8">المتوسط</text>
          </svg>
        </div>
        <div className="space-y-2">
          {hover ? (() => {
            const b = BOOSTERS.find(x=>x.id===hover);
            const s = scores[b.id] || 0;
            const lab = s<=4?'يحتاج تطوير':s<=6?'متوسط':s<=8?'جيد':'متميّز';
            const labColor = s<=4?'#EF4444':s<=6?'#F59E0B':s<=8?'#10B981':'#FBBF24';
            return (
              <div className="p-4 rounded-2xl border scale-in" style={{borderColor:b.color, background:`${b.color}10`}}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{background:`${b.color}20`, border:`1px solid ${b.color}50`}}>
                    <b.Icon size={18} style={{color:b.color}}/>
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{b.name}</div>
                    <div className="text-[10px] text-slate-400">معزز رقم {b.num}</div>
                  </div>
                </div>
                <div className="text-2xl font-black mb-1" style={{color:b.color}}>{s}/10</div>
                <div className="text-xs font-bold mb-2" style={{color:labColor}}>{lab}</div>
                <p className="text-xs text-slate-300 leading-relaxed">{b.tagline}</p>
                <div className="mt-2 pt-2 border-t text-[10px] font-bold" style={{borderColor:`${b.color}30`, color:b.color}}>{b.equation}</div>
              </div>
            );
          })() : (
            <div className="p-4 rounded-2xl border" style={{borderColor:'rgba(251,191,36,0.2)', background:'rgba(255,255,255,0.02)'}}>
              <div className="text-amber-300 text-sm font-bold mb-2">دليل الألوان</div>
              <div className="space-y-1.5">
                {BOOSTERS.map(b => (
                  <div key={b.id} className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{background:b.color, boxShadow:`0 0 6px ${b.color}`}}/>
                    <span className="text-slate-300 flex-1">{b.name}</span>
                    <span className="font-bold" style={{color:b.color}}>{scores[b.id]||0}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ResultsPage({scores, history, ctx, go}) {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    aiAnalyze(scores, ctx).then(t => { if (!cancelled) { setAnalysis(t); setLoading(false); }}).catch(()=>{ if (!cancelled) { setError(true); setLoading(false); }});
    return () => { cancelled = true; };
  }, []);
  const total = Object.values(scores).reduce((a,b)=>a+b, 0);
  const max = Object.values(scores).length*10;
  const pct = Math.round((total/max)*100);
  const sortedB = BOOSTERS.map(b => ({...b, score:scores[b.id]||0})).sort((a,b)=>a.score-b.score);
  const radar = BOOSTERS.map(b => ({
    name: b.name.length>8?b.name.substring(0,8)+'..':b.name,
    current: scores[b.id]||0,
    previous: history.length>1 ? (history[history.length-2].scores[b.id]||0) : 0,
    fullMark: 10
  }));
  const lineData = history.map((h, i) => ({ name:`تقييم ${i+1}`, score:Math.round(Object.values(h.scores).reduce((a,b)=>a+b,0)/9*10) }));
  const change = history.length>1 ? Math.round((Object.values(scores).reduce((a,b)=>a+b,0)/9*10) - (Object.values(history[history.length-2].scores).reduce((a,b)=>a+b,0)/9*10)) : 0;
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center">
        <GlowBadge><TrendingUp size={14} style={{color:'#FBBF24'}}/><span className="text-amber-300 text-xs font-bold">تحليل نتائجك</span></GlowBadge>
        <h1 className="mt-6 text-4xl sm:text-5xl font-black text-white mb-3">سجل تقييماتك</h1>
        <p className="text-slate-400">{history.length} تقييم مكتمل</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl border text-center fade-in-up lift-on-hover" style={{background:`linear-gradient(135deg, ${change>=0?'rgba(16,185,129,0.08)':'rgba(239,68,68,0.08)'}, rgba(15,23,41,0.8))`, borderColor:change>=0?'rgba(16,185,129,0.3)':'rgba(239,68,68,0.3)', animationDelay:'0.05s'}}>
          <Zap size={28} className="mx-auto mb-2 float-anim" style={{color:change>=0?'#10B981':'#EF4444'}}/>
          <CountUp target={change} suffix="%" prefix={change>=0?'+':''} className="text-3xl font-black block" style={{color:change>=0?'#10B981':'#EF4444'}}/>
          <div className="text-xs text-slate-400 mt-1">التغيّر</div>
        </div>
        <div className="p-5 rounded-2xl border text-center fade-in-up lift-on-hover" style={{background:'linear-gradient(135deg, rgba(251,191,36,0.08), rgba(15,23,41,0.8))', borderColor:'rgba(251,191,36,0.3)', animationDelay:'0.15s'}}>
          <Calendar size={28} className="mx-auto mb-2 text-amber-400 float-anim" style={{animationDelay:'0.5s'}}/>
          <CountUp target={history.length} className="text-3xl font-black text-amber-300 block"/>
          <div className="text-xs text-slate-400 mt-1">إجمالي التقييمات</div>
        </div>
        <div className="p-5 rounded-2xl border text-center fade-in-up lift-on-hover" style={{background:'linear-gradient(135deg, rgba(251,191,36,0.08), rgba(15,23,41,0.8))', borderColor:'rgba(251,191,36,0.3)', animationDelay:'0.25s'}}>
          <Trophy size={28} className="mx-auto mb-2 text-amber-400 float-anim" style={{animationDelay:'1s'}}/>
          <CountUp target={pct} suffix="%" className="text-3xl font-black text-amber-300 block"/>
          <div className="text-xs text-slate-400 mt-1">آخر تقييم</div>
        </div>
      </div>

      <div className="rounded-3xl border p-6 sm:p-8" style={{background:'linear-gradient(135deg, rgba(251,191,36,0.05), rgba(15,23,41,0.8))', borderColor:'rgba(251,191,36,0.3)'}}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg, #FBBF24, #F59E0B)'}}>
            <Sparkles size={20} className="text-slate-900"/>
          </div>
          <div>
            <h3 className="text-xl font-black text-white">تحليل ذكي شخصي</h3>
            <p className="text-xs text-amber-300/70">مولّد بـClaude مع مراعاة سياقك</p>
          </div>
        </div>
        {loading && <div className="flex items-center gap-3 py-8 justify-center"><Loader2 className="animate-spin" size={24} style={{color:'#FBBF24'}}/><span className="text-amber-300">يُحلّل نمط نتائجك...</span></div>}
        {error && <div className="text-center py-4"><p className="text-rose-300 mb-3">تعذّر التوليد.</p><button onClick={()=>{setError(false); setLoading(true); aiAnalyze(scores, ctx).then(t=>{setAnalysis(t); setLoading(false);}).catch(()=>{setError(true); setLoading(false);});}} className="text-xs px-4 py-2 rounded-lg font-bold text-slate-900" style={{background:'#FBBF24'}}>أعد المحاولة</button></div>}
        {analysis && (
          <>
            <div className="text-slate-200 leading-relaxed text-right">{renderMD(analysis)}</div>
            <div className="mt-4 flex justify-end"><AskAIButton topic="كيف أحسّن أضعف معزز عندي عملياً؟" label="اسأل المرشد عن التطبيق"/></div>
          </>
        )}
      </div>

      {history.length>1 && (
        <div className="rounded-3xl border p-6" style={{background:'rgba(15,23,41,0.6)', borderColor:'rgba(251,191,36,0.2)'}}>
          <h3 className="text-xl font-bold text-amber-300 mb-4">منحنى التطور عبر الزمن</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <CartesianGrid stroke="rgba(251,191,36,0.1)" strokeDasharray="3 3"/>
              <XAxis dataKey="name" stroke="#94A3B8" tick={{fontSize:11}} reversed/>
              <YAxis stroke="#94A3B8" tick={{fontSize:11}} domain={[0,100]}/>
              <Tooltip contentStyle={{background:'#0a0e1a', border:'1px solid rgba(251,191,36,0.3)', borderRadius:12}}/>
              <Line type="monotone" dataKey="score" stroke="#FBBF24" strokeWidth={3} dot={{r:6, fill:'#FBBF24'}}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {history.length>1 && (
        <div className="rounded-3xl border p-6" style={{background:'rgba(15,23,41,0.6)', borderColor:'rgba(251,191,36,0.2)'}}>
          <h3 className="text-xl font-bold text-amber-300 mb-1">مقارنة آخر تقييمين</h3>
          <p className="text-xs text-slate-400 mb-4"><span style={{color:'#FBBF24'}}>الأصفر</span> = الحالي · <span style={{color:'#10B981'}}>الأخضر</span> = السابق</p>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={radar}>
              <PolarGrid stroke="rgba(251,191,36,0.2)"/>
              <PolarAngleAxis dataKey="name" tick={{fill:'#CBD5E1', fontSize:11}}/>
              <Radar name="السابق" dataKey="previous" stroke="#10B981" fill="#10B981" fillOpacity={0.3}/>
              <Radar name="الحالي" dataKey="current" stroke="#FBBF24" fill="#FBBF24" fillOpacity={0.4}/>
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}

      <EnhancedRadar scores={scores}/>

      <div className="rounded-3xl border p-6" style={{background:'rgba(15,23,41,0.6)', borderColor:'rgba(251,191,36,0.2)'}}>
        <h3 className="text-xl font-bold text-amber-300 mb-5">تفصيل آخر تقييم</h3>
        <div className="space-y-4">
          {sortedB.reverse().map(b => {
            const prev = history.length>1 ? (history[history.length-2].scores[b.id]||0) : 0;
            const diff = b.score - prev;
            return (
              <div key={b.id}>
                <div className="flex items-center justify-between mb-1.5">
                  <button onClick={()=>go('booster', b.id)} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{background:`${b.color}15`, border:`1px solid ${b.color}40`}}>
                      <b.Icon size={14} style={{color:b.color}}/>
                    </div>
                    <span className="text-white font-semibold text-sm">{b.name}</span>
                  </button>
                  <div className="text-sm font-bold" style={{color:b.color}}>
                    {b.score}/10 {history.length>1 && diff!==0 && <span className="text-xs mr-1" style={{color:diff>0?'#10B981':'#EF4444'}}>({diff>0?'+':''}{diff})</span>}
                  </div>
                </div>
                <div className="h-2.5 rounded-full overflow-hidden relative" style={{background:'rgba(255,255,255,0.05)'}}>
                  <div className="h-full rounded-full bar-grow" style={{
                    width:`${b.score*10}%`,
                    background:`linear-gradient(90deg, ${b.color}, ${b.color}cc)`,
                    boxShadow:`0 0 12px ${b.color}80, inset 0 0 6px ${b.color}40`
                  }}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button onClick={()=>go('library')} className="py-4 rounded-xl border font-bold text-amber-200 hover:scale-105 transition-all" style={{borderColor:'rgba(251,191,36,0.4)', background:'rgba(251,191,36,0.05)'}}>📚 المكتبة المخصصة</button>
        <button onClick={()=>go('plan')} className="py-4 rounded-xl border font-bold text-amber-200 hover:scale-105 transition-all" style={{borderColor:'rgba(251,191,36,0.4)', background:'rgba(251,191,36,0.05)'}}>📋 خطة 30 يوم</button>
        <button onClick={()=>go('assessment')} className="py-4 rounded-xl font-bold text-slate-900 hover:scale-105 transition-all" style={{background:'linear-gradient(135deg, #FBBF24, #F59E0B)'}}>⚡ أعد التقييم</button>
      </div>

      <div className="p-4 rounded-xl border flex items-start gap-3 text-sm" style={{background:'rgba(251,191,36,0.03)', borderColor:'rgba(251,191,36,0.15)'}}>
        <Info size={18} className="text-amber-400 flex-shrink-0 mt-0.5"/>
        <p className="text-slate-300">هذا التحليل أداة وعي ذاتي، ليس بديلاً عن استشارة المختصين. لاحظ أنماطاً، لا أحكاماً نهائية.</p>
      </div>
    </div>
  );
}

function LearnPage({go}) {
  const [open, setOpen] = useState(0);
  const concepts = [
    {title:'لماذا الذكاء وحده لا يكفي؟', Icon:Brain, color:'#FBBF24', content:'الذكاء عملة، لكنه لا يُنفق نفسه. كم من ذكي يعرف الكثير ويُنجز القليل؟ في المدرسة كنا نُكافأ لمعرفة الإجابة، لكن الحياة تسأل: هل تطبّق؟ هل تلتزم؟', topic:'لماذا الذكاء وحده لا يكفي للنجاح'},
    {title:'الفرق بين العارف والفاعل', Icon:Zap, color:'#10B981', content:'العارف يحفظ الكتب، الفاعل يطبّق صفحة كل يوم. العارف يحلم بالمشاريع، الفاعل يبدأ بمشروع صغير اليوم.', topic:'الفرق العملي بين من يعرف ومن يُنجز'},
    {title:'استعارة المحرك والوقود', Icon:Sparkles, color:'#06B6D4', content:'الذكاء محرك قوي، لكن المحرك وحده لا يحرك السيارة. تحتاج وقوداً (انضباطاً)، سائقاً (ذكاءً عاطفياً)، اتجاهاً (تواصلاً)، صيانة (مرونة)، طريقاً (علاقات).', topic:'استعارة المحرك في منهجية المعززات التسعة'},
    {title:'تقييم النفس vs تقييم الآخرين', Icon:Eye, color:'#8B5CF6', content:'تقييم النفس يكشف ما تظنه عنك، وتقييم الآخرين يكشف ما تتصرف به فعلياً. الفجوة بينهما خريطة الطريق نحو شخصية أكثر صدقاً.', topic:'الفجوة بين تقييم الذات وتقييم الآخرين'},
    {title:'الحلقة الأضعف', Icon:AlertTriangle, color:'#EF4444', content:'النجاح لا يتطلب الكمال، بل يتطلب إصلاح الحلقة الأضعف. خلل واحد قد يعطل المحرك. ابحث عن أقل درجة وابدأ بها.', topic:'لماذا تحديد الحلقة الأضعف أهم من تعزيز نقاط القوة'}
  ];
  const studies = [
    {title:'دراسة دنيدن', desc:'تتبّعت 1000 طفل لـ32 سنة في نيوزيلندا، ووجدت أن ضبط النفس يتنبأ بالنجاح أكثر من نسبة الذكاء.', url:'https://dunedinstudy.otago.ac.nz/', icon:'🧪', tag:'انضباط'},
    {title:'تقرير LinkedIn 2024', desc:'وضع التواصل في المرتبة الأولى عالمياً بين أكثر المهارات طلباً.', url:'https://www.linkedin.com/', icon:'📊', tag:'تواصل'},
    {title:'دراسة هارفارد', desc:'75+ سنة من البحث: جودة العلاقات أقوى متنبئ بالسعادة وطول العمر.', url:'https://www.adultdevelopmentstudy.org/', icon:'❤️', tag:'علاقات'},
    {title:'أبحاث كارول دويك', desc:'العقلية النامية ترفع التحصيل بنسبة تصل إلى 30%.', url:'https://www.mindsetworks.com/', icon:'🌱', tag:'مرونة'}
  ];
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <GlowBadge><Lightbulb size={14} style={{color:'#FBBF24'}}/><span className="text-amber-300 text-xs font-bold">تعلّم لك فرقة</span></GlowBadge>
        <h1 className="mt-6 text-5xl font-black"><span className="text-white">اكتشف ما يصنع </span><span style={{color:'#FBBF24'}}>الفارق</span></h1>
        <p className="mt-4 text-slate-400">لماذا يفشل الأذكياء؟ ما الفرق بين من يعرف ومن يُنجز؟</p>
      </div>
      <div className="rounded-3xl border p-8 mb-8" style={{background:'linear-gradient(135deg, rgba(251,191,36,0.05), rgba(15,23,41,0.8))', borderColor:'rgba(251,191,36,0.3)'}}>
        <div className="text-center">
          <div className="text-5xl mb-3">🧠</div>
          <div className="text-3xl font-black mb-3"><span style={{color:'#FBBF24'}}>الذكاء × المعززات = النتيجة</span></div>
          <p className="text-slate-300 max-w-xl mx-auto leading-relaxed">المعادلة ضرب لا جمع — إذا كان أي معزز صفراً فالنتيجة صفر، بغض النظر عن مستوى الذكاء.</p>
          <div className="mt-4 flex justify-center"><AskAIButton topic="لماذا المعادلة ضرب لا جمع؟" label="اشرح المعادلة"/></div>
        </div>
      </div>
      <div className="rounded-3xl border p-6 mb-8" style={{background:'rgba(15,23,41,0.6)', borderColor:'rgba(251,191,36,0.2)'}}>
        <h3 className="text-amber-300 text-xl font-bold text-center mb-5">مفارقة الذكاء</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl border" style={{borderColor:'rgba(239,68,68,0.3)', background:'rgba(239,68,68,0.03)'}}>
            <div className="flex items-center gap-2 mb-3"><X size={18} className="text-rose-400"/><h4 className="font-bold text-rose-300">الذكاء المُجرّد</h4></div>
            <ul className="space-y-1.5 text-sm text-slate-300">
              <li>✓ يفهم بسرعة</li><li>✓ يربط الأفكار ببراعة</li><li>✓ يحفظ التفاصيل</li><li>✓ يرى حلولاً خفية</li>
            </ul>
            <div className="mt-3 pt-3 border-t text-xs text-rose-300/80" style={{borderColor:'rgba(239,68,68,0.15)'}}>النتيجة: مشاريع غير مكتملة، فرص ضائعة، علاقات متعبة.</div>
          </div>
          <div className="p-5 rounded-2xl border" style={{borderColor:'rgba(16,185,129,0.3)', background:'rgba(16,185,129,0.03)'}}>
            <div className="flex items-center gap-2 mb-3"><Check size={18} className="text-emerald-400"/><h4 className="font-bold text-emerald-300">الذكاء المُفعَّل</h4></div>
            <ul className="space-y-1.5 text-sm text-slate-300">
              <li>✓ قد يكون أقل ذكاءً، لكنه يطبّق</li><li>✓ يلتزم</li><li>✓ يتواصل</li><li>✓ يصبر ويستمر</li>
            </ul>
            <div className="mt-3 pt-3 border-t text-xs text-emerald-300/80" style={{borderColor:'rgba(16,185,129,0.15)'}}>النتيجة: استقرار مالي، أثر ملموس، ثقة، نجاح مستمر.</div>
          </div>
        </div>
        <div className="mt-5 p-4 rounded-xl text-center" style={{background:'rgba(251,191,36,0.05)', border:'1px dashed rgba(251,191,36,0.3)'}}>
          <p className="text-amber-200 font-bold text-sm">في المدرسة نُكافأ لأننا نعرف الإجابة، في الحياة نُكافأ لأننا نُطبّقها.</p>
        </div>
      </div>
      <h3 className="text-amber-300 text-xl font-bold text-center mb-6">مفاهيم تغيّر نظرتك</h3>
      <div className="space-y-3 mb-10">
        {concepts.map((c, i) => (
          <div key={i} className="rounded-2xl border" style={{borderColor:open===i?c.color:'rgba(251,191,36,0.2)', background:'rgba(15,23,41,0.6)'}}>
            <button onClick={()=>setOpen(open===i?-1:i)} className="w-full text-right p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{background:`${c.color}15`}}>
                    <c.Icon size={18} style={{color:c.color}}/>
                  </div>
                  <span className="text-white font-bold">{c.title}</span>
                </div>
                <ChevronLeft size={20} style={{color:c.color}} className={`transition-transform ${open===i?'rotate-90':''}`}/>
              </div>
            </button>
            {open===i && (
              <div className="px-5 pb-5 pt-0 pr-16">
                <p className="text-slate-300 text-sm leading-relaxed mb-3">{c.content}</p>
                <AskAIButton topic={c.topic} label="اشرح أكثر"/>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="rounded-3xl border p-6 mb-8" style={{background:'rgba(15,23,41,0.6)', borderColor:'rgba(251,191,36,0.2)'}}>
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-amber-300 text-xl font-bold">الأساس العلمي</h3>
          <GlowBadge><GraduationCap size={12} style={{color:'#FBBF24'}}/><span className="text-xs text-amber-300">مراجع موثّقة</span></GlowBadge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {studies.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noreferrer" className="p-4 rounded-xl border block text-right transition-all hover:scale-[1.02]"
              style={{background:'rgba(255,255,255,0.02)', borderColor:'rgba(251,191,36,0.15)'}}>
              <div className="flex items-start justify-between mb-2">
                <span className="text-2xl">{s.icon}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full" style={{background:'rgba(251,191,36,0.1)', color:'#FBBF24'}}>{s.tag}</span>
              </div>
              <div className="font-bold text-white text-sm mb-1 flex items-center gap-1">{s.title}<ExternalLink size={10} className="opacity-60"/></div>
              <div className="text-xs text-slate-400 leading-relaxed">{s.desc}</div>
            </a>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button onClick={()=>go('assessment')} className="py-4 rounded-xl font-bold text-slate-900" style={{background:'linear-gradient(135deg, #FBBF24, #F59E0B)'}}>⚡ ابدأ تقييم نفسك</button>
        <button onClick={()=>go('boosters')} className="py-4 rounded-xl border font-bold text-amber-200" style={{borderColor:'rgba(251,191,36,0.4)'}}>📚 المعززات التسعة</button>
      </div>
    </div>
  );
}

function BoostersListPage({go}) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-black"><span className="text-white">المعززات </span><span style={{color:'#FBBF24'}}>التسعة</span></h1>
        <p className="mt-4 text-slate-400 max-w-xl mx-auto">كل معزز هو وقود لمحرك ذكائك</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {BOOSTERS.map((b, i) => <BoosterCard key={b.id} booster={b} idx={i} onClick={()=>go("booster", b.id)}/>)}
      </div>
    </div>
  );
}

function ScenarioSection({booster}) {
  const scenarios = SCENARIOS[booster.id] || [];
  const [active, setActive] = useState(0);
  const [userSit, setUserSit] = useState('');
  const [aiResp, setAiResp] = useState(null);
  const [loading, setLoading] = useState(false);
  const ctxIcons = {'الأسرة':Home, 'العمل':Briefcase, 'الاجتماعي':Users};
  const askAdvice = async () => {
    if (!userSit.trim() || loading) return;
    setLoading(true);
    try { setAiResp(await aiScenario(booster.id, scenarios[active].ctx, userSit)); }
    catch { setAiResp('__error__'); }
    setLoading(false);
  };
  if (scenarios.length === 0) return null;
  return (
    <div className="p-6 rounded-2xl border" style={{background:'rgba(15,23,41,0.6)', borderColor:'rgba(251,191,36,0.2)'}}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-white text-lg">مواقف حياتية</h3>
        <span className="text-xs text-amber-300/70">3 سيناريوهات واقعية</span>
      </div>
      <div className="flex gap-2 mb-5">
        {scenarios.map((s, i) => {
          const SI = ctxIcons[s.ctx] || User;
          return (
            <button key={i} onClick={()=>{setActive(i); setAiResp(null); setUserSit('');}}
              className="flex-1 py-2 px-3 rounded-xl border flex items-center justify-center gap-2 text-sm transition-all"
              style={{
                borderColor: active===i?booster.color:'rgba(255,255,255,0.1)',
                background: active===i?`${booster.color}10`:'transparent',
                color: active===i?booster.color:'#94A3B8'
              }}>
              <SI size={14}/><span>{s.ctx}</span>
            </button>
          );
        })}
      </div>
      <div className="space-y-3">
        <div className="p-4 rounded-xl border" style={{background:'rgba(255,255,255,0.02)', borderColor:'rgba(255,255,255,0.05)'}}>
          <div className="text-xs font-bold text-amber-300 mb-1">الموقف</div>
          <p className="text-slate-200 text-sm leading-relaxed">{scenarios[active].situation}</p>
        </div>
        <div className="p-4 rounded-xl border" style={{background:'rgba(239,68,68,0.05)', borderColor:'rgba(239,68,68,0.2)'}}>
          <div className="text-xs font-bold text-rose-300 mb-1">المأزق</div>
          <p className="text-slate-200 text-sm leading-relaxed">{scenarios[active].struggle}</p>
        </div>
        <div className="p-4 rounded-xl border" style={{background:`${booster.color}08`, borderColor:`${booster.color}30`}}>
          <div className="text-xs font-bold mb-1" style={{color:booster.color}}>المنهج المقترح</div>
          <p className="text-slate-200 text-sm leading-relaxed">{scenarios[active].approach}</p>
        </div>
      </div>
      <div className="mt-5 pt-5 border-t" style={{borderColor:'rgba(251,191,36,0.15)'}}>
        <h4 className="text-amber-300 font-bold mb-2 flex items-center gap-2">
          <Sparkles size={14}/> هل تواجه موقفاً مشابهاً؟
        </h4>
        <p className="text-xs text-slate-400 mb-3">صف موقفك بسطر أو سطرين، وسيقترح لك المرشد خطوات عملية مخصصة</p>
        <textarea value={userSit} onChange={e=>setUserSit(e.target.value)} rows={2}
          placeholder="مثال: زوجتي طلبت أن نخصص وقتاً أسبوعياً سوياً، وأنا أؤجل من شهر..."
          className="w-full px-4 py-3 rounded-xl outline-none text-sm text-right mb-3"
          style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', color:'white'}}/>
        {!aiResp && (
          <button onClick={askAdvice} disabled={!userSit.trim() || loading}
            className="w-full py-3 rounded-xl font-bold text-slate-900 disabled:opacity-50 flex items-center justify-center gap-2"
            style={{background:'linear-gradient(135deg, #FBBF24, #F59E0B)'}}>
            {loading ? <><Loader2 size={16} className="animate-spin"/> يفكر...</> : <><Sparkles size={16}/> اطلب نصيحة مخصصة</>}
          </button>
        )}
        {aiResp && aiResp !== '__error__' && (
          <div className="p-4 rounded-xl text-right" style={{background:'rgba(251,191,36,0.05)', border:'1px solid rgba(251,191,36,0.3)'}}>
            {renderMD(aiResp)}
            <button onClick={()=>{setAiResp(null); setUserSit('');}} className="mt-3 text-xs text-amber-300 underline">موقف آخر</button>
          </div>
        )}
        {aiResp === '__error__' && <p className="text-rose-300 text-center text-sm">تعذّر التوليد. <button onClick={askAdvice} className="underline font-bold">حاول مرة أخرى</button></p>}
      </div>
    </div>
  );
}

function BoosterDetailPage({booster, scores, onExplored, go}) {
  const score = scores?.[booster.id];
  useEffect(() => { onExplored?.(booster.id); }, []);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <button onClick={()=>go('boosters')} className="text-amber-300 text-sm flex items-center gap-1 ml-auto">جميع المعززات <ChevronLeft size={14}/></button>
      <BoosterHeroArt booster={booster}/>
      <div className="p-6 rounded-2xl border" style={{background:'rgba(15,23,41,0.6)', borderColor:`${booster.color}30`}}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2"><Lightbulb size={18} style={{color:'#FBBF24'}}/><h3 className="font-bold text-amber-300">المفهوم الأساسي</h3></div>
          <AskAIButton topic={`${booster.name} — ${booster.tagline}`} label="اشرح أكثر"/>
        </div>
        <p className="text-slate-300 leading-relaxed">{booster.concept}</p>
        {booster.quote && (
          <div className="mt-4 pt-4 border-t flex items-start gap-2" style={{borderColor:`${booster.color}20`}}>
            <span className="text-3xl flex-shrink-0">❝</span>
            <p className="text-amber-200/90 italic text-sm leading-relaxed">{booster.quote}</p>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl border" style={{background:'rgba(239,68,68,0.05)', borderColor:'rgba(239,68,68,0.3)'}}>
          <div className="flex items-center gap-2 mb-2"><X size={18} className="text-rose-400"/><h4 className="font-bold text-rose-300">بدون هذا المعزز</h4></div>
          <p className="text-slate-300 text-sm leading-relaxed">{booster.without}</p>
        </div>
        <div className="p-5 rounded-2xl border" style={{background:'rgba(16,185,129,0.05)', borderColor:'rgba(16,185,129,0.3)'}}>
          <div className="flex items-center gap-2 mb-2"><Check size={18} className="text-emerald-400"/><h4 className="font-bold text-emerald-300">مع هذا المعزز</h4></div>
          <p className="text-slate-300 text-sm leading-relaxed">{booster.with}</p>
        </div>
      </div>
      <div className="p-5 rounded-2xl border flex items-start gap-3" style={{background:'rgba(139,92,246,0.05)', borderColor:'rgba(139,92,246,0.3)'}}>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:'rgba(139,92,246,0.15)'}}>
          <GraduationCap size={18} className="text-violet-400"/>
        </div>
        <div className="flex-1">
          <h4 className="text-violet-300 font-bold text-sm mb-1">الأساس العلمي</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{booster.science}</p>
        </div>
      </div>
      <div className="p-6 rounded-2xl border" style={{background:`linear-gradient(135deg, ${booster.color}08, rgba(15,23,41,0.6))`, borderColor:`${booster.color}40`}}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2"><Zap size={18} style={{color:booster.color}}/><h3 className="font-bold" style={{color:booster.color}}>الأداة العملية</h3></div>
          <AskAIButton topic={`الأداة العملية لـ${booster.name}: ${booster.practical}`} label="كيف أطبقها"/>
        </div>
        <p className="text-slate-200 leading-relaxed">{booster.practical}</p>
      </div>
      <ScenarioSection booster={booster}/>
      <div className="p-6 rounded-2xl border" style={{background:'rgba(15,23,41,0.6)', borderColor:'rgba(251,191,36,0.2)'}}>
        <h3 className="font-bold text-white mb-4">اسأل نفسك</h3>
        <div className="space-y-3">
          {booster.questions.map((q, i) => (
            <div key={i} className="flex gap-3 items-start p-3 rounded-xl" style={{background:'rgba(251,191,36,0.03)'}}>
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{background:'rgba(251,191,36,0.15)', color:'#FBBF24'}}>{i+1}</div>
              <p className="text-slate-200 text-sm leading-relaxed">{q}</p>
            </div>
          ))}
        </div>
      </div>
      {booster.sources && (
        <div className="p-5 rounded-2xl border" style={{background:'rgba(15,23,41,0.6)', borderColor:'rgba(251,191,36,0.15)'}}>
          <h4 className="text-amber-300 font-bold mb-3 flex items-center gap-2"><ExternalLink size={14}/> مصادر للتعمق</h4>
          <div className="space-y-2">
            {booster.sources.map((src, i) => (
              <a key={i} href={src.url} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-lg hover:bg-amber-400/5 transition" style={{background:'rgba(255,255,255,0.02)'}}>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{background:'rgba(251,191,36,0.1)', color:'#FBBF24'}}>{src.type}</span>
                <span className="text-slate-300 text-sm flex items-center gap-1">{src.title} <ExternalLink size={10} className="opacity-50"/></span>
              </a>
            ))}
          </div>
        </div>
      )}
      {score!==undefined && (
        <div className="p-6 rounded-2xl border text-center" style={{background:`linear-gradient(135deg, ${booster.color}10, transparent)`, borderColor:`${booster.color}50`}}>
          <div className="text-sm text-slate-400 mb-2">نتيجتك</div>
          <div className="text-5xl font-black" style={{color:booster.color}}>{score}/10</div>
          <button onClick={()=>go('library', booster.id)} className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold"
            style={{background:`${booster.color}20`, color:booster.color, border:`1px solid ${booster.color}40`}}>
            <BookOpen size={14}/> اقرأ مقالات هذا المعزز
          </button>
        </div>
      )}
    </div>
  );
}

function LibraryPage({scores, focusBoosterId, ctx}) {
  const sorted = useMemo(() => scores ? [...BOOSTERS].sort((a,b)=>(scores[a.id]||0)-(scores[b.id]||0)) : BOOSTERS, [scores]);
  const [active, setActive] = useState(focusBoosterId || sorted[0].id);
  const [recs, setRecs] = useState({});
  const [loading, setLoading] = useState(false);
  const ab = BOOSTERS.find(b=>b.id===active);
  const score = scores?.[active] || null;
  const fetchAI = async () => {
    setLoading(true);
    try {
      const text = await aiLib(active, score||5, ctx);
      setRecs(r => ({...r, [active]: text}));
    } catch { setRecs(r => ({...r, [active]:'__error__'})); }
    setLoading(false);
  };
  const lab = (s) => s==null?null:s<=4?'الأضعف':s<=6?'يحتاج تطوير':s<=8?'جيد':'متميّز';
  const col = (s) => s==null?'#94A3B8':s<=4?'#EF4444':s<=6?'#F59E0B':s<=8?'#10B981':'#FBBF24';
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <GlowBadge><BookOpen size={14} style={{color:'#FBBF24'}}/><span className="text-amber-300 text-xs font-bold">مكتبة التعلم</span></GlowBadge>
        <h1 className="mt-6 text-4xl sm:text-5xl font-black text-white">مقالات لكل معزز</h1>
        {scores && <p className="mt-3 text-slate-400 text-sm">⭐ مرتبة حسب نتائجك — ابدأ بالأضعف</p>}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          {sorted.map((b, i) => {
            const s = scores?.[b.id];
            const weakest = scores && i===0;
            return (
              <button key={b.id} onClick={()=>setActive(b.id)} className="w-full text-right p-3 rounded-xl border transition-all"
                style={{borderColor:active===b.id?b.color:'rgba(255,255,255,0.05)', background:active===b.id?`${b.color}10`:'rgba(15,23,41,0.5)'}}>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <b.Icon size={16} style={{color:b.color}} className="flex-shrink-0"/>
                    <div className="min-w-0">
                      <div className="text-white text-sm font-semibold truncate">{b.name}</div>
                      {s!=null && <div className="text-xs" style={{color:col(s)}}>{s}/10 · {lab(s)}</div>}
                    </div>
                  </div>
                  {weakest && <span className="text-xs px-2 py-0.5 rounded-full" style={{background:'rgba(239,68,68,0.15)', color:'#EF4444'}}>الأضعف</span>}
                </div>
              </button>
            );
          })}
        </div>
        <div className="lg:col-span-2">
          <div className="mb-6 p-5 rounded-2xl border flex items-center justify-between" style={{background:`${ab.color}05`, borderColor:`${ab.color}30`}}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{background:`${ab.color}15`, border:`1px solid ${ab.color}40`}}>
                <ab.Icon size={22} style={{color:ab.color}}/>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{ab.name}</h3>
                <div className="text-xs" style={{color:ab.color}}>{ab.equation}</div>
              </div>
            </div>
            {score!=null && <div className="text-3xl font-black" style={{color:ab.color}}>{score}/10</div>}
          </div>
          <div className="rounded-2xl border p-5 mb-6" style={{background:'linear-gradient(135deg, rgba(251,191,36,0.05), transparent)', borderColor:'rgba(251,191,36,0.3)'}}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2"><Sparkles size={16} style={{color:'#FBBF24'}}/><h4 className="font-bold text-amber-300">توصيات ذكية مخصصة</h4></div>
              {!recs[active] && !loading && <button onClick={fetchAI} className="text-xs px-3 py-1.5 rounded-lg font-bold text-slate-900" style={{background:'linear-gradient(135deg, #FBBF24, #F59E0B)'}}>اقترح لي بالـ AI</button>}
            </div>
            {loading && <div className="flex items-center gap-2 py-4 justify-center"><Loader2 className="animate-spin" size={20} style={{color:'#FBBF24'}}/><span className="text-amber-300 text-sm">يُجهّز توصياتك...</span></div>}
            {recs[active]==='__error__' && <div className="text-rose-300 text-sm text-center py-3">تعذّر التوليد. <button onClick={fetchAI} className="underline">حاول</button></div>}
            {recs[active] && recs[active]!=='__error__' && <div className="text-right">{renderMD(recs[active])}</div>}
            {!recs[active] && !loading && <p className="text-slate-400 text-sm text-center py-3">اضغط الزر لتوصيات مخصصة بناءً على نتيجتك وسياقك</p>}
          </div>
          <div className="space-y-2">
            <h4 className="text-amber-300 font-bold mb-3 flex items-center gap-2"><ExternalLink size={14}/> مصادر مرجعية</h4>
            {ab.sources?.map((src, i) => (
              <a key={i} href={src.url} target="_blank" rel="noreferrer" className="p-4 rounded-xl border flex items-center justify-between hover:bg-amber-400/5 transition" style={{background:'rgba(15,23,41,0.6)', borderColor:'rgba(251,191,36,0.15)'}}>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{background:'rgba(251,191,36,0.1)', color:'#FBBF24'}}>{src.type}</span>
                <span className="text-slate-300 text-sm flex items-center gap-1">{src.title} <ExternalLink size={10} className="opacity-50"/></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PlanPage({scores, ctx, setHasPlan}) {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  if (!scores) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <ClipboardList size={48} className="mx-auto mb-4 text-amber-400"/>
        <h2 className="text-2xl font-black text-white mb-2">أكمل تقييماً أولاً</h2>
        <p className="text-slate-400">الخطة تُبنى حول أضعف 3 معززات لديك.</p>
      </div>
    );
  }
  const sorted = Object.entries(scores).sort((a,b)=>a[1]-b[1]);
  const weak3 = sorted.slice(0,3).map(([id,s]) => ({booster:BOOSTERS.find(b=>b.id===id), score:s}));
  const gen = async () => {
    setLoading(true); setError(false);
    try { setPlan(await aiPlan(scores, ctx)); setHasPlan(true); }
    catch { setError(true); }
    setLoading(false);
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <GlowBadge><ClipboardList size={14} style={{color:'#FBBF24'}}/><span className="text-amber-300 text-xs font-bold">خطة 30 يوم</span></GlowBadge>
        <h1 className="mt-6 text-4xl sm:text-5xl font-black text-white">خطة عملك المخصصة</h1>
        <p className="mt-3 text-slate-400">تركيز على أضعف 3 معززات</p>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-8">
        {weak3.map(({booster, score}) => (
          <div key={booster.id} className="p-4 rounded-2xl border text-center" style={{background:`${booster.color}05`, borderColor:`${booster.color}30`}}>
            <booster.Icon size={20} className="mx-auto mb-1" style={{color:booster.color}}/>
            <div className="text-white font-bold text-sm">{booster.name}</div>
            <div className="text-2xl font-black my-1" style={{color:booster.color}}>{score}/10</div>
            <div className="text-xs text-rose-400">يحتاج تطوير</div>
          </div>
        ))}
      </div>
      <div className="rounded-3xl border p-6 mb-6" style={{background:'linear-gradient(135deg, rgba(251,191,36,0.08), rgba(15,23,41,0.6))', borderColor:'rgba(251,191,36,0.4)'}}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg, #FBBF24, #F59E0B)'}}>
            <Sparkles size={20} className="text-slate-900"/>
          </div>
          <h3 className="text-amber-300 font-black text-xl">خطة مولّدة بالذكاء</h3>
        </div>
        <p className="text-slate-300 text-sm mb-5">خطة تدريبية مفصّلة بـClaude بناءً على نتائجك وسياقك (عمر، مرحلة، تحديات).</p>
        {!plan && !loading && (
          <button onClick={gen} className="w-full py-3 rounded-xl font-bold text-slate-900 flex items-center justify-center gap-2" style={{background:'linear-gradient(135deg, #FBBF24, #F59E0B)'}}>
            <Sparkles size={16}/> ولّد خطتي المخصصة
          </button>
        )}
        {loading && (
          <div className="flex items-center justify-center gap-3 py-6">
            <Loader2 className="animate-spin" size={24} style={{color:'#FBBF24'}}/>
            <span className="text-amber-300">يُصمّم خطتك...</span>
          </div>
        )}
        {error && <div className="text-rose-300 text-center py-3">تعذّر التوليد. <button onClick={gen} className="underline font-bold">أعد المحاولة</button></div>}
        {plan && <div className="mt-4 p-5 rounded-xl text-right text-slate-200" style={{background:'rgba(0,0,0,0.3)'}}>{renderMD(plan)}</div>}
      </div>
    </div>
  );
}

function BadgesPage({stats}) {
  const earned = BADGES_LIST.filter(b => b.ok(stats));
  const pct = Math.round((earned.length/BADGES_LIST.length)*100);
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <GlowBadge><Award size={14} style={{color:'#FBBF24'}}/><span className="text-amber-300 text-xs font-bold">أوسمة الإنجاز</span></GlowBadge>
        <h1 className="mt-6 text-4xl sm:text-5xl font-black text-white">إنجازاتك</h1>
        <p className="mt-3 text-slate-400">حصلت على <strong style={{color:'#FBBF24'}}>{earned.length}</strong> وسام من أصل {BADGES_LIST.length}</p>
      </div>
      <div className="rounded-2xl border p-5 mb-8" style={{background:'rgba(15,23,41,0.6)', borderColor:'rgba(251,191,36,0.2)'}}>
        <div className="flex justify-between mb-2">
          <span className="text-amber-300 font-bold">{pct}%</span>
          <span className="text-slate-400 text-sm">مستوى إنجازك</span>
        </div>
        <div className="h-3 rounded-full overflow-hidden" style={{background:'rgba(255,255,255,0.05)'}}>
          <div className="h-full rounded-full" style={{width:`${pct}%`, background:'linear-gradient(90deg, #FBBF24, #F59E0B)', boxShadow:'0 0 15px rgba(251,191,36,0.5)'}}/>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {BADGES_LIST.map(b => {
          const got = b.ok(stats);
          return (
            <div key={b.id} className="p-5 rounded-2xl border text-center transition-all"
              style={{borderColor:got?'#FBBF24':'rgba(255,255,255,0.05)', background:got?'rgba(251,191,36,0.05)':'rgba(15,23,41,0.4)', boxShadow:got?'0 0 25px rgba(251,191,36,0.15)':'none'}}>
              <div className="w-14 h-14 mx-auto mb-3 rounded-2xl flex items-center justify-center"
                style={{background:got?'linear-gradient(135deg, #FBBF24, #F59E0B)':'rgba(255,255,255,0.05)'}}>
                {got ? <b.Icon size={24} className="text-slate-900"/> : <Lock size={20} className="text-slate-600"/>}
              </div>
              <div className={`font-bold text-sm ${got?'text-white':'text-slate-500'}`}>{b.name}</div>
              <div className={`text-xs mt-1 ${got?'text-slate-300':'text-slate-600'}`}>{b.sub}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Credits page — YouTube link + creators with avatars
function CreditsPage({onDisclaimer}) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center">
        <GlowBadge><Info size={14} style={{color:'#FBBF24'}}/><span className="text-amber-300 text-xs font-bold">المصادر والكريديت</span></GlowBadge>
        <h1 className="mt-6 text-4xl sm:text-5xl font-black text-white">عن هذه التجربة</h1>
        <p className="mt-3 text-slate-400">من أين أتت الفكرة، ومن صنعها</p>
      </div>

      {/* Personal note from Adel — the story behind the platform */}
      <div className="relative rounded-3xl border p-6 sm:p-8 overflow-hidden" style={{background:'linear-gradient(135deg, rgba(6,182,212,0.06), rgba(15,23,41,0.85), rgba(251,191,36,0.04))', borderColor:'rgba(6,182,212,0.25)'}}>
        {/* Decorative quote mark */}
        <div className="absolute top-3 right-4 text-7xl font-black opacity-15 leading-none" style={{color:'#06B6D4'}}>"</div>
        <div className="absolute bottom-3 left-4 text-7xl font-black opacity-15 leading-none rotate-180" style={{color:'#FBBF24'}}>"</div>
        {/* Header with mini avatar */}
        <div className="relative flex items-center gap-3 mb-5">
          <div className="rounded-full border-2 overflow-hidden flex-shrink-0" style={{width:48, height:48, borderColor:'#06B6D4', boxShadow:'0 0 15px rgba(6,182,212,0.4)'}}>
            <img src={ADEL_PHOTO} alt="عادل الزهراني" className="w-full h-full object-cover"/>
          </div>
          <div>
            <div className="text-xs text-cyan-300/80">قصّة المشروع · بقلم</div>
            <div className="font-black text-white text-base">م. عادل الزهراني</div>
          </div>
        </div>
        {/* The story */}
        <div className="relative space-y-3 text-slate-200 leading-relaxed">
          <p className="text-base">
            تابعتُ مقطع <strong className="text-amber-300">اليوتيوب للأستاذ محمد النحيت</strong> عن المعززات التسعة للنجاح،
            وأعجبتني <strong className="text-cyan-300">دقّته العميقة</strong> في تشخيص ما يصنع الفرق بين الناس.
          </p>
          <p>
            لاحظتُ أنّ ما يصفه ليس نظريات بعيدة، بل واقع <em className="text-amber-200">موجود بيننا وحولنا كل يوم</em> —
            في طريقة الإنجاز، التواصل، التعلّم، وبناء العلاقات.
          </p>
          <p>
            فقمتُ بتصميم وتطوير <strong className="text-white">هذه المنصّة التفاعلية</strong> لتحويل تلك الفكرة الملهمة
            إلى أداة تقييم عملية، تساعدك على معرفة معززاتك القوية وحلقاتك الضعيفة، ووضع خطة تطوير حقيقية.
          </p>
        </div>
        {/* Attribution box */}
        <div className="relative mt-6 pt-5 border-t grid grid-cols-1 sm:grid-cols-2 gap-3" style={{borderColor:'rgba(255,255,255,0.08)'}}>
          <div className="flex items-start gap-2 p-3 rounded-xl" style={{background:'rgba(251,191,36,0.06)', border:'1px solid rgba(251,191,36,0.2)'}}>
            <Lightbulb size={16} className="mt-0.5 flex-shrink-0" style={{color:'#FBBF24'}}/>
            <div>
              <div className="text-xs text-amber-300 font-bold mb-0.5">الفكرة والمحتوى المعرفي</div>
              <div className="text-xs text-slate-300">مستوحاة من مقطع الأستاذ محمد النحيت</div>
            </div>
          </div>
          <div className="flex items-start gap-2 p-3 rounded-xl" style={{background:'rgba(6,182,212,0.06)', border:'1px solid rgba(6,182,212,0.2)'}}>
            <Sparkles size={16} className="mt-0.5 flex-shrink-0" style={{color:'#06B6D4'}}/>
            <div>
              <div className="text-xs text-cyan-300 font-bold mb-0.5">التصميم والتطوير والتوصيات</div>
              <div className="text-xs text-slate-300">من إعداد م. عادل الزهراني</div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube source */}
      <a href="https://www.youtube.com/watch?v=JxvocGt6Has" target="_blank" rel="noreferrer"
        className="block rounded-3xl border p-6 transition-all hover:scale-[1.01]"
        style={{background:'linear-gradient(135deg, rgba(239,68,68,0.05), rgba(15,23,41,0.8))', borderColor:'rgba(239,68,68,0.3)'}}>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg, #DC2626, #991B1B)'}}>
            <Play size={28} className="text-white ml-1"/>
          </div>
          <div className="flex-1 text-right">
            <div className="text-xs text-rose-300 mb-1">المصدر الأصلي · YouTube</div>
            <h3 className="text-xl font-black text-white">كيف تستفيد من ذكائك؟</h3>
            <p className="text-sm text-slate-400">أهم 9 أسرار تساعدك · مقطع كامل</p>
          </div>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">
          هذه التجربة التفاعلية مستوحاة بالكامل من مقطع للأستاذ <strong className="text-amber-300">محمد النحيت</strong>،
          يشرح فيه المعززات التسعة للنجاح. صُمّمت كأداة تطبيقية لتسهيل تقييم الذات وتوليد خطط عمل بناءً على المنهجية.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-rose-300">
          <Play size={14}/> اضغط لمشاهدة المقطع الأصلي <ExternalLink size={12}/>
        </div>
      </a>

      {/* Creators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a href="https://twitter.com/M_Alnhet" target="_blank" rel="noreferrer"
          className="rounded-3xl border p-6 text-center transition-all hover:scale-[1.02]"
          style={{background:'rgba(15,23,41,0.6)', borderColor:'rgba(251,191,36,0.3)'}}>
          <Avatar name="محمد النحيت" color="#FBBF24" size={100} photo={MUHAMMAD_PHOTO}/>
          <div className="mt-4">
            <div className="text-xs text-amber-300 mb-1">المادة العلمية</div>
            <h4 className="font-black text-white text-lg">الأستاذ / محمد النحيت</h4>
            <div className="text-amber-200/80 text-sm mt-1 flex items-center justify-center gap-1">
              <span>@M_Alnhet</span><ExternalLink size={10}/>
            </div>
          </div>
        </a>
        <a href="https://twitter.com/AdelAlzahraniSA" target="_blank" rel="noreferrer"
          className="rounded-3xl border p-6 text-center transition-all hover:scale-[1.02]"
          style={{background:'rgba(15,23,41,0.6)', borderColor:'rgba(251,191,36,0.3)'}}>
          <Avatar name="عادل الزهراني" color="#06B6D4" size={100} photo={ADEL_PHOTO}/>
          <div className="mt-4">
            <div className="text-xs text-cyan-300 mb-1">الفكرة والتصميم والتطوير</div>
            <h4 className="font-black text-white text-lg">م / عادل الزهراني</h4>
            <div className="text-cyan-200/80 text-sm mt-1 flex items-center justify-center gap-1">
              <span>@AdelAlzahraniSA</span><ExternalLink size={10}/>
            </div>
          </div>
        </a>
      </div>

      {/* Tech stack & approach */}
      <div className="rounded-3xl border p-6" style={{background:'rgba(15,23,41,0.6)', borderColor:'rgba(251,191,36,0.2)'}}>
        <h3 className="text-amber-300 font-bold mb-4 flex items-center gap-2"><Sparkles size={16}/> كيف بُنيت التجربة</h3>
        <div className="space-y-3 text-sm text-slate-300">
          <div className="flex items-start gap-3"><span className="text-amber-400">▸</span><div><strong className="text-white">تحليلات ذكية حقيقية:</strong> كل تحليل وخطة وتوصية تُولَّد فعلياً عبر Claude API بناءً على نتائجك وسياقك الشخصي.</div></div>
          <div className="flex items-start gap-3"><span className="text-amber-400">▸</span><div><strong className="text-white">مرشد سياقي:</strong> الزر الذهبي (أسفل اليسار) يفتح محادثة مع مرشد يعرف نتائجك ويجيب بناءً عليها.</div></div>
          <div className="flex items-start gap-3"><span className="text-amber-400">▸</span><div><strong className="text-white">خارطة معرفية تفاعلية:</strong> 9 معززات حول محرك الذكاء، قابلة للتفاعل والاستكشاف.</div></div>
          <div className="flex items-start gap-3"><span className="text-amber-400">▸</span><div><strong className="text-white">سياق شخصي:</strong> العمر والمرحلة والتحديات تُغذّي كل توصية لتكون عملية ومناسبة لك.</div></div>
        </div>
      </div>

      {/* Disclaimer */}
      <button onClick={onDisclaimer} className="w-full rounded-2xl border p-5 flex items-center gap-4 transition-all hover:scale-[1.01] text-right"
        style={{background:'rgba(251,191,36,0.05)', borderColor:'rgba(251,191,36,0.3)'}}>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'rgba(251,191,36,0.15)'}}>
          <AlertTriangle size={20} style={{color:'#FBBF24'}}/>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-amber-200 text-sm">تنبيه مهم — اقرأ الإخلاء قبل الاعتماد</h4>
          <p className="text-xs text-slate-400 mt-1">هذه التجربة أداة وعي ذاتي، وليست بديلاً عن استشارة المختصين</p>
        </div>
        <ChevronLeft size={18} className="text-amber-400"/>
      </button>
    </div>
  );
}

// Multi-step Assess Others Flow
function AssessOthersPage({onPicked}) {
  const [step, setStep] = useState('select');
  const [pType, setPType] = useState(null);
  const [name, setName] = useState('');

  if (step === 'name') {
    const pt = PERSON_TYPES.find(p=>p.id===pType);
    return (
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center border-2" style={{borderColor:pt.color, background:`${pt.color}15`}}>
            <pt.Icon size={28} style={{color:pt.color}}/>
          </div>
          <h2 className="text-2xl font-black text-white mb-2">من هو/هي؟</h2>
          <p className="text-slate-400 text-sm">سنستخدم اسمه/اسمها لتخصيص النصيحة (اختياري)</p>
        </div>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="مثال: أحمد، سارة، (أو اتركه فارغاً)"
          className="w-full px-4 py-3 rounded-xl outline-none text-right mb-4"
          style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', color:'white'}}/>
        <button onClick={()=>onPicked(pType, name)} className="w-full py-3 rounded-xl font-bold text-slate-900"
          style={{background:'linear-gradient(135deg, #FBBF24, #F59E0B)'}}>
          ابدأ التقييم
        </button>
        <button onClick={()=>setStep('select')} className="w-full mt-2 py-2 text-sm text-slate-400">رجوع</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <GlowBadge><Users size={14} style={{color:'#FBBF24'}}/><span className="text-amber-300 text-xs font-bold">قيّم شخصاً آخر</span></GlowBadge>
        <h1 className="mt-6 text-5xl font-black text-white">من تريد تقييمه؟</h1>
        <p className="mt-4 text-slate-400 max-w-xl mx-auto">ساعد من تحب على اكتشاف معززات ذكائه. ستجيب عن الأسئلة كما تراه أنت من خلال تعاملك معه. سنُولّد لك في النهاية نصيحة عملية على كيف تساعده دون استفزاز.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PERSON_TYPES.map(p => (
          <button key={p.id} onClick={()=>{setPType(p.id); setStep('name');}} className="text-right p-5 rounded-2xl border transition-all hover:scale-[1.02] hover:-translate-y-1"
            style={{borderColor:`${p.color}30`, background:`linear-gradient(135deg, ${p.color}08, rgba(15,23,41,0.95))`}}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{background:`${p.color}15`, border:`1px solid ${p.color}40`}}>
              <p.Icon size={20} style={{color:p.color}}/>
            </div>
            <div className="font-bold text-white text-lg mb-1">{p.label}</div>
            <div className="text-sm text-slate-400 leading-relaxed">{p.sub}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

// Result page: AI advice on how to help the assessed person
function AssessOthersResultPage({scores, personType, personName, ctx, go}) {
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    let cancelled = false;
    aiOthersAdvice(personType, scores, personName, ctx)
      .then(t => { if (!cancelled) { setAdvice(t); setLoading(false); }})
      .catch(() => { if (!cancelled) { setError(true); setLoading(false); }});
    return () => { cancelled = true; };
  }, []);
  const sortedB = BOOSTERS.map(b => ({...b, score:scores[b.id]||0})).sort((a,b)=>b.score-a.score);
  const pt = PERSON_TYPES.find(p=>p.id===personType);
  const display = personName || pt.label;
  const retry = () => {
    setError(false); setLoading(true);
    aiOthersAdvice(personType, scores, personName, ctx)
      .then(t => { setAdvice(t); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <div className="text-center">
        <GlowBadge color={pt.color}>
          <pt.Icon size={14} style={{color:pt.color}}/>
          <span className="text-xs font-bold" style={{color:pt.color}}>تقييم {display}</span>
        </GlowBadge>
        <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">نتائج {display}</h1>
        <p className="mt-2 text-slate-400">كما رأيتها أنت من خلال تعاملك</p>
      </div>
      <EnhancedRadar scores={scores} title={`مقياس معززات ${display}`} subtitle="رؤيتك لمعززاته بصرياً — مرر فوق أي معزز للتفاصيل."/>

      <div className="rounded-3xl border p-6" style={{background:'rgba(15,23,41,0.6)', borderColor:`${pt.color}30`}}>
        <div className="space-y-3">
          {sortedB.map(b => (
            <div key={b.id}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <b.Icon size={14} style={{color:b.color}}/>
                  <span className="text-white text-sm">{b.name}</span>
                </div>
                <span className="text-sm font-bold" style={{color:b.color}}>{b.score}/10</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{background:'rgba(255,255,255,0.05)'}}>
                <div className="h-full rounded-full bar-grow" style={{width:`${b.score*10}%`, background:`linear-gradient(90deg, ${b.color}, ${b.color}cc)`, boxShadow:`0 0 8px ${b.color}60`}}/>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-3xl border p-6 sm:p-8" style={{background:'linear-gradient(135deg, rgba(251,191,36,0.05), rgba(15,23,41,0.8))', borderColor:'rgba(251,191,36,0.3)'}}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg, #FBBF24, #F59E0B)'}}>
            <Sparkles size={20} className="text-slate-900"/>
          </div>
          <div>
            <h3 className="text-xl font-black text-white">كيف تساعد {display}؟</h3>
            <p className="text-xs text-amber-300/70">نصيحة مخصصة من المرشد الذكي</p>
          </div>
        </div>
        {loading && <div className="flex items-center gap-3 py-8 justify-center"><Loader2 className="animate-spin" size={24} style={{color:'#FBBF24'}}/><span className="text-amber-300">يصمّم نصيحة لمساعدته...</span></div>}
        {error && <div className="text-center py-4"><p className="text-rose-300 mb-3">تعذّر التوليد.</p><button onClick={retry} className="text-xs px-4 py-2 rounded-lg font-bold text-slate-900" style={{background:'#FBBF24'}}>أعد المحاولة</button></div>}
        {advice && <div className="text-slate-200 leading-relaxed text-right">{renderMD(advice)}</div>}
      </div>
      <div className="p-4 rounded-xl border flex items-start gap-3 text-sm" style={{background:'rgba(251,191,36,0.03)', borderColor:'rgba(251,191,36,0.15)'}}>
        <Info size={18} className="text-amber-400 flex-shrink-0 mt-0.5"/>
        <p className="text-slate-300">تذكّر: تقييمك رأيك من زاويتك. لا تشارك النتائج مع الشخص دون إذنه — هذه أداة لمساعدتك في فهمه ودعمه، لا للحكم عليه.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button onClick={()=>go('assessOthers')} className="py-3 rounded-xl border font-bold text-amber-200" style={{borderColor:'rgba(251,191,36,0.4)'}}>قيّم شخصاً آخر</button>
        <button onClick={()=>go('home')} className="py-3 rounded-xl font-bold text-slate-900" style={{background:'linear-gradient(135deg, #FBBF24, #F59E0B)'}}>الرجوع للرئيسية</button>
      </div>
    </div>
  );
}

// ═══ MAIN APP ═══
export default function App() {
  const [view, setView] = useState({name:'home', param:null});
  const [history, setHistory] = useState([]);
  const [hasPlan, setHasPlan] = useState(false);
  const [othersAssessed, setOthersAssessed] = useState(0);
  const [coachQuestions, setCoachQuestions] = useState(0);
  const [boostersExplored, setBoostersExplored] = useState(new Set());

  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showContext, setShowContext] = useState(false);
  const [ctx, setCtx] = useState(null);
  const [disclaimerSeen, setDisclaimerSeen] = useState(false);
  const [pendingView, setPendingView] = useState(null);

  // Assess Others state
  const [otherPerson, setOtherPerson] = useState(null); // {type, name, scores}

  const scores = history.length>0 ? history[history.length-1].scores : null;

  const stats = useMemo(() => {
    const ac = history.length;
    const totals = history.map(h => Object.values(h.scores).reduce((a,b)=>a+b, 0));
    const maxScore = totals.length ? Math.max(...totals) : 0;
    const allBs = history.flatMap(h => Object.values(h.scores));
    const maxBoosterScore = allBs.length ? Math.max(...allBs) : 0;
    const improvement = history.length>=2 ? (totals[totals.length-1]-totals[0]) : 0;
    return {assessmentsCount:ac, maxScore, maxBoosterScore, improvement, hasPlan, othersAssessed, coachQuestions, boostersExplored:boostersExplored.size};
  }, [history, hasPlan, othersAssessed, coachQuestions, boostersExplored]);

  const go = (name, param=null) => {
    const isAssessFlow = (name === 'assessment' || name === 'assessOthers');
    if (isAssessFlow && (!disclaimerSeen || !ctx)) {
      setPendingView({name, param});
      if (!disclaimerSeen) setShowDisclaimer(true);
      else if (!ctx) setShowContext(true);
      return;
    }
    setView({name, param});
    if (typeof window !== 'undefined') window.scrollTo({top:0, behavior:'smooth'});
  };

  const onAssessmentComplete = (newScores) => {
    setHistory(h => [...h, {scores:newScores, date:new Date().toISOString()}]);
    setView({name:'results'});
  };

  // Assess Others picks: triggered after person type + name
  const onOthersPicked = (pType, name) => {
    setOtherPerson({type:pType, name, scores:null});
    setView({name:'assessOthersFlow'});
  };

  const onOthersComplete = (newScores) => {
    setOtherPerson(p => ({...p, scores:newScores}));
    setOthersAssessed(c => c+1);
    setView({name:'assessOthersResult'});
  };

  const onContextSave = (c) => {
    setCtx(c);
    setShowContext(false);
    if (pendingView) { setView(pendingView); setPendingView(null); }
  };
  const onContextSkip = () => {
    setCtx({});
    setShowContext(false);
    if (pendingView) { setView(pendingView); setPendingView(null); }
  };

  const onDisclaimerClose = () => {
    setShowDisclaimer(false);
    setDisclaimerSeen(true);
    if (pendingView) {
      if (!ctx) setShowContext(true);
      else { setView(pendingView); setPendingView(null); }
    }
  };

  const exploredBooster = (id) => {
    setBoostersExplored(s => { const n = new Set(s); n.add(id); return n; });
  };

  const render = () => {
    switch (view.name) {
      case 'home': return <HomePage go={go} ctx={ctx}/>;
      case 'assessment': return <AssessmentPage onComplete={onAssessmentComplete} onBack={()=>go('home')}/>;
      case 'results': return <ResultsPage scores={scores} history={history} ctx={ctx} go={go}/>;
      case 'progress': return scores ? <ResultsPage scores={scores} history={history} ctx={ctx} go={go}/> : <HomePage go={go}/>;
      case 'learn': return <LearnPage go={go}/>;
      case 'assessOthers': return <AssessOthersPage onPicked={onOthersPicked}/>;
      case 'assessOthersFlow': return <AssessmentPage onComplete={onOthersComplete} onBack={()=>go('assessOthers')}/>;
      case 'assessOthersResult':
        return otherPerson?.scores
          ? <AssessOthersResultPage scores={otherPerson.scores} personType={otherPerson.type} personName={otherPerson.name} ctx={ctx} go={go}/>
          : <HomePage go={go}/>;
      case 'boosters': return <BoostersListPage go={go}/>;
      case 'booster': {
        const b = BOOSTERS.find(x=>x.id===view.param) || BOOSTERS[0];
        return <BoosterDetailPage booster={b} scores={scores} onExplored={exploredBooster} go={go}/>;
      }
      case 'library': return <LibraryPage scores={scores} focusBoosterId={view.param} ctx={ctx}/>;
      case 'plan': return <PlanPage scores={scores} ctx={ctx} setHasPlan={setHasPlan}/>;
      case 'badges': return <BadgesPage stats={stats}/>;
      case 'credits': return <CreditsPage onDisclaimer={()=>setShowDisclaimer(true)}/>;
      default: return <HomePage go={go}/>;
    }
  };

  const titleMap = {
    home:'محرك الذكاء', assessment:'التقييم', results:'النتائج', progress:'التطور',
    learn:'تعلّم لك فرقة', assessOthers:'قيّم غيرك', assessOthersFlow:'تقييم شخص',
    assessOthersResult:'نتائج التقييم', boosters:'المعززات التسعة',
    booster:'تفاصيل المعزز', library:'المكتبة', plan:'خطة 30 يوم',
    badges:'الإنجازات', credits:'المصادر'
  };

  return (
    <div dir="rtl" className="min-h-screen relative" style={{
      background:'radial-gradient(ellipse at top, #131929 0%, #0a0e1a 50%, #050810 100%)',
      fontFamily:'"Tajawal","Cairo",system-ui,sans-serif', color:'white'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap');
        @keyframes twinkle { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        @keyframes pageFadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(251,191,36,0.3); }
          50% { box-shadow: 0 0 35px rgba(251,191,36,0.6); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-ring {
          0%, 100% { stroke-opacity: 0.6; r: 75; }
          50% { stroke-opacity: 1; r: 78; }
        }
        @keyframes growBar {
          from { width: 0%; }
          to { /* keep computed width */ }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        body { font-family: 'Tajawal', system-ui, sans-serif; scroll-behavior: smooth; }
        * { -webkit-tap-highlight-color: transparent; }
        .page-transition { animation: pageFadeIn 0.45s ease-out; }
        .scale-in { animation: scaleIn 0.4s ease-out; }
        .float-anim { animation: float 4s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .pulse-ring { animation: pulse-ring 3s ease-in-out infinite; }
        .spin-slow { animation: spin 20s linear infinite; }
        .spin-slower { animation: spin 40s linear infinite; }
        .spin-reverse { animation: spin 15s linear infinite reverse; }
        .bar-grow { animation: growBar 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .fade-in-up { animation: fadeInUp 0.6s ease-out both; }

        /* Knowledge map orbit rotation */
        .orbit-rotate {
          animation: spin 90s linear infinite;
          transform-box: view-box;
          transform-origin: 250px 250px;
        }
        .orbit-rotate.paused { animation-play-state: paused; }

        /* Custom tooltip */
        [data-tooltip] { position: relative; }
        [data-tooltip]::before {
          content: attr(data-tooltip);
          position: absolute; bottom: calc(100% + 8px); left: 50%;
          transform: translateX(-50%) translateY(4px);
          background: rgba(10,14,26,0.95); color: #FCD34D;
          padding: 6px 12px; border-radius: 8px;
          font-size: 11px; font-weight: 700;
          white-space: nowrap; pointer-events: none;
          opacity: 0; transition: all 0.2s;
          border: 1px solid rgba(251,191,36,0.3);
          z-index: 100;
        }
        [data-tooltip]:hover::before {
          opacity: 1; transform: translateX(-50%) translateY(0);
        }

        /* Smooth scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: rgba(15,23,41,0.5); }
        ::-webkit-scrollbar-thumb { background: rgba(251,191,36,0.3); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(251,191,36,0.5); }

        /* Card hover lift */
        .lift-on-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .lift-on-hover:hover { transform: translateY(-4px) scale(1.01); }
      `}</style>
      <StarryBg/>
      <DisclaimerModal open={showDisclaimer} onClose={onDisclaimerClose}/>
      <ContextModal open={showContext} onSave={onContextSave} onSkip={onContextSkip}/>
      {view.name !== 'home' && <TopBar onHome={()=>go('home')} title={titleMap[view.name]} onCredits={()=>go('credits')}/>}
      <div key={view.name} className="page-transition relative" style={{zIndex:1}}>{render()}</div>
      <AICoach scores={scores} ctx={ctx} onAsk={()=>setCoachQuestions(c=>c+1)}/>
    </div>
  );
}
