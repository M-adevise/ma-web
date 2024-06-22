import { AccountCircle, Email, Home, LocationCity, Phone, Public, PublicSharp } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputAdornment, InputLabel, MenuItem, Select, Step, StepLabel, Stepper, TextField, Typography } from "@mui/material";
import { FC, Fragment, useState } from "react";
import { DoctorRoleEnum, PatientRoleEnum, UserRoleEnum, UserSexEnum } from "../../providers";

const steps = ['Information Personnelle', 'Information Professionnel (Medecin uniquement)', 'Validation'];

export const AuthPage: FC<{}> = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>());
    const [role, setRole] = useState<UserRoleEnum | string>();
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        if (activeStep === 0 && role !== DoctorRoleEnum.Doctor) {
            setActiveStep(2);
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        if (activeStep >= 1 && role !== DoctorRoleEnum.Doctor) {
            setActiveStep(0);
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Grid>
            <Box sx={{ width: '100%', textAlign: "center" }}>
                <Stepper alternativeLabel activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: {
                            optional?: React.ReactNode;
                        } = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">Optional</Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {
                    activeStep == 0 && (
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '50ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <Typography>Tous les champs sont obligatoires</Typography>
                            <div>
                                <TextField
                                    label="Prenom(s)"
                                    id="prenom"
                                    required
                                    variant="filled"
                                    size="small"
                                />
                                <TextField
                                    label="Nom"
                                    id="nom"
                                    required
                                    variant="filled"
                                    size="small"
                                />
                            </div>
                            <div>
                                <FormControl variant="filled" size="small" required sx={{ m: 1, width: '50ch' }}>
                                    <InputLabel id="sexe-label">Sexe</InputLabel>
                                    <Select
                                        labelId="sexe-label"
                                        id="sexe"
                                    >
                                        <MenuItem value={UserSexEnum.Male}>Masculin</MenuItem>
                                        <MenuItem value={UserSexEnum.Feminine}>Féminin</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    label="Date de Naissance"
                                    id="date-naissance"
                                    type="date"
                                    variant="filled"
                                    required
                                    size="small"
                                    InputLabelProps={{ shrink: true }}
                                />
                                <TextField
                                    label="Numero CIN"
                                    id="cin"
                                    type="number"
                                    variant="filled"
                                    required
                                    size="small"
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Email"
                                    id="email"
                                    type="email"
                                    variant="filled"
                                    required
                                    size="small"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Email />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField
                                    label="Contact"
                                    id="contact"
                                    type="tel"
                                    variant="filled"
                                    required
                                    size="small"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Phone />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Adresse"
                                    id="adresse"
                                    type="text"
                                    variant="filled"
                                    required
                                    size="small"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Home />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField
                                    label="City"
                                    id="city"
                                    type="text"
                                    variant="filled"
                                    required
                                    size="small"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LocationCity />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Country"
                                    id="country"
                                    type="text"
                                    variant="filled"
                                    required
                                    size="small"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Public />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <FormControl variant="filled" size="small" required sx={{ m: 1, width: '50ch' }}>
                                    <InputLabel id="role-label">Role</InputLabel>
                                    <Select
                                        labelId="role-label"
                                        id="role"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        <MenuItem value={PatientRoleEnum.Patient}>Patient(e)</MenuItem>
                                        <MenuItem value={DoctorRoleEnum.Doctor}>Medecin</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </Box>
                    )
                }
                {
                    activeStep === 1 && role === DoctorRoleEnum.Doctor && (
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '50ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <Typography>Tous les champs sont obligatoires</Typography>
                            <div>
                                <TextField
                                    label="Matricule Medecin"
                                    id="matricule"
                                    variant="filled"
                                    required
                                    size="small"
                                    InputLabelProps={{ shrink: true }}
                                />
                                <TextField
                                    label="Nom du department"
                                    id="nom"
                                    required
                                    variant="filled"
                                    size="small"
                                />
                                <TextField
                                    label="Directeur"
                                    id="directeur"
                                    required
                                    variant="filled"
                                    size="small"
                                />
                                <FormControl variant="filled" size="small" required sx={{ m: 1, width: '50ch' }}>
                                    <InputLabel id="sexe-label">Sexe</InputLabel>
                                    <Select
                                        labelId="sexe-label"
                                        id="sexe"
                                    >
                                        <MenuItem value={UserSexEnum.Male}>Masculin</MenuItem>
                                        <MenuItem value={UserSexEnum.Feminine}>Féminin</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    label="Email"
                                    id="email"
                                    required
                                    variant="filled"
                                    size="small"
                                />
                                <TextField
                                    label="Contact"
                                    id="contact"
                                    required
                                    variant="filled"
                                    size="small"
                                />
                            </div>
                            <div>
                            </div>
                        </Box>
                    )
                }
                {
                    (activeStep === 2) && (
                        <Box>
                            <Typography variant="body1">
                                Veuillez lire et accepter les conditions d'utilisation des données et de confidentialité.
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1, mb: 1 }}>
                                <a href="/terms" target="_blank" rel="noopener noreferrer">
                                    Conditions d'utilisation
                                </a>
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1, mb: 1 }}>
                                <a href="/privacy" target="_blank" rel="noopener noreferrer">
                                    Politique de confidentialité
                                </a>
                            </Typography>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={acceptedTerms}
                                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                                        name="acceptedTerms"
                                        color="primary"
                                    />
                                }
                                label="J'accepte les conditions d'utilisation des données et de confidentialité"
                            />
                        </Box>
                    )
                }
                <Fragment>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            variant="contained"
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 2 }}
                        >
                            Retour
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {
                            activeStep >= steps.length - 1 ? (
                                <Button variant="contained" onClick={handleNext}>
                                    Envoyer
                                </Button>
                            ) : (
                                <Button variant="contained" onClick={handleNext}>
                                    Suivant
                                </Button>
                            )
                        }

                    </Box>
                </Fragment>
            </Box>
        </Grid>
    );
}